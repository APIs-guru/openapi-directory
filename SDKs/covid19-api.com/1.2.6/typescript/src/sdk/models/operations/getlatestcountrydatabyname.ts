import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetLatestCountryDataByNameFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetLatestCountryDataByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestCountryDataByNameFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetLatestCountryDataByNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLatestCountryDataByNameQueryParams;
}


export class GetLatestCountryDataByName200ApplicationJson extends SpeakeasyBase {
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


export class GetLatestCountryDataByNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetLatestCountryDataByName200ApplicationJson })
  getLatestCountryDataByName200ApplicationJsonObjects?: GetLatestCountryDataByName200ApplicationJson[];
}
