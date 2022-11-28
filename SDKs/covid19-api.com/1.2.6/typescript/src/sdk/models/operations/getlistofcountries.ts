import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListOfCountriesFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetListOfCountriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetListOfCountriesFormatEnum;
}


export class GetListOfCountries200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alpha-2-code" })
  alpha2Code?: string;

  @SpeakeasyMetadata({ data: "json, name=alpha-3-code" })
  alpha3Code?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetListOfCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListOfCountriesQueryParams;
}


export class GetListOfCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetListOfCountries200ApplicationJson })
  getListOfCountries200ApplicationJsonObjects?: GetListOfCountries200ApplicationJson[];
}
