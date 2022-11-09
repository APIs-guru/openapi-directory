import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCityFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetCityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetCityFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;
}


export class GetCityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCityQueryParams;
}


export class GetCityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCity200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
