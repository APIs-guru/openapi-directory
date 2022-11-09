import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListOfCountriesFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetListOfCountriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetListOfCountriesFormatEnum;
}


export class GetListOfCountriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListOfCountriesQueryParams;
}


export class GetListOfCountries200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpha-2-code" })
  alpha2Code?: string;

  @Metadata({ data: "json, name=alpha-3-code" })
  alpha3Code?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetListOfCountriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetListOfCountries200ApplicationJson })
  getListOfCountries200ApplicationJsonObjects?: GetListOfCountries200ApplicationJson[];
}
