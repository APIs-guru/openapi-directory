import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBng2latlongEastingNorthingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=easting" })
  easting: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=northing" })
  northing: number;
}

export enum GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum {
    Ok = "ok",
    Error = "error"
}


export class GetBng2latlongEastingNorthing200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=easting" })
  easting?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=northing" })
  northing?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum;
}


export class GetBng2latlongEastingNorthingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBng2latlongEastingNorthingPathParams;
}


export class GetBng2latlongEastingNorthingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getBng2latlongEastingNorthing200ApplicationJsonObject?: GetBng2latlongEastingNorthing200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
