import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetLatestCountryDataByNameFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetLatestCountryDataByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestCountryDataByNameFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetLatestCountryDataByName200ApplicationJson extends SpeakeasyBase {
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


export class GetLatestCountryDataByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLatestCountryDataByNameQueryParams;
}


export class GetLatestCountryDataByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetLatestCountryDataByName200ApplicationJson })
  getLatestCountryDataByName200ApplicationJsonObjects?: GetLatestCountryDataByName200ApplicationJson[];
}
