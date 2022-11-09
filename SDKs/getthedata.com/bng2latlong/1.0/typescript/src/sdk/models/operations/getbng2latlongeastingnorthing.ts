import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBng2latlongEastingNorthingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=easting" })
  easting: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=northing" })
  northing: number;
}


export class GetBng2latlongEastingNorthingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBng2latlongEastingNorthingPathParams;
}

export enum GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum {
    Ok = "ok"
,    Error = "error"
}


export class GetBng2latlongEastingNorthing200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=easting" })
  easting?: number;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=northing" })
  northing?: number;

  @Metadata({ data: "json, name=status" })
  status?: GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum;
}


export class GetBng2latlongEastingNorthingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getBng2latlongEastingNorthing200ApplicationJsonObject?: GetBng2latlongEastingNorthing200ApplicationJson;

  @Metadata()
  statusCode: number;
}
