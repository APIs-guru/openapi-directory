import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetLatestCountryDataByCodeFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetLatestCountryDataByCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestCountryDataByCodeFormatEnum;
}


export class GetLatestCountryDataByCodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLatestCountryDataByCodeQueryParams;
}


export class GetLatestCountryDataByCode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=critical" })
  critical?: number;

  @Metadata({ data: "json, name=deaths" })
  deaths?: number;

  @Metadata({ data: "json, name=lastChange" })
  lastChange?: Date;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetLatestCountryDataByCodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetLatestCountryDataByCode200ApplicationJson })
  getLatestCountryDataByCode200ApplicationJsonObjects?: GetLatestCountryDataByCode200ApplicationJson[];
}
