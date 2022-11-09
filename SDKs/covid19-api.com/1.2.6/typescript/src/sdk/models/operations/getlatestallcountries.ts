import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetLatestAllCountriesFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetLatestAllCountriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestAllCountriesFormatEnum;
}


export class GetLatestAllCountriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLatestAllCountriesQueryParams;
}


export class GetLatestAllCountries200ApplicationJson extends SpeakeasyBase {
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


export class GetLatestAllCountriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetLatestAllCountries200ApplicationJson })
  getLatestAllCountries200ApplicationJsonObjects?: GetLatestAllCountries200ApplicationJson[];
}
