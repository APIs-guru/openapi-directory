import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetLatestAllCountriesFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetLatestAllCountriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestAllCountriesFormatEnum;
}


export class GetLatestAllCountries200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=critical" })
  critical?: number;

  @SpeakeasyMetadata({ data: "json, name=deaths" })
  deaths?: number;

  @SpeakeasyMetadata({ data: "json, name=lastChange" })
  lastChange?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetLatestAllCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLatestAllCountriesQueryParams;
}


export class GetLatestAllCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetLatestAllCountries200ApplicationJson })
  getLatestAllCountries200ApplicationJsonObjects?: GetLatestAllCountries200ApplicationJson[];
}
