import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetLatestCountryDataByCodeFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetLatestCountryDataByCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestCountryDataByCodeFormatEnum;
}


export class GetLatestCountryDataByCode200ApplicationJson extends SpeakeasyBase {
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


export class GetLatestCountryDataByCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLatestCountryDataByCodeQueryParams;
}


export class GetLatestCountryDataByCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetLatestCountryDataByCode200ApplicationJson })
  getLatestCountryDataByCode200ApplicationJsonObjects?: GetLatestCountryDataByCode200ApplicationJson[];
}
