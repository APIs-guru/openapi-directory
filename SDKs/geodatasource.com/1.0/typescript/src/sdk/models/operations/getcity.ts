import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCityFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetCityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetCityFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;
}


export class GetCityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCityQueryParams;
}


export class GetCityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCity200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
