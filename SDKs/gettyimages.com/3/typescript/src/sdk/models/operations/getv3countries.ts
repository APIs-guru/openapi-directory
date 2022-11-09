import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3CountriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3CountriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetV3CountriesHeaders;
}


export class GetV3CountriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  countriesList?: shared.CountriesList;

  @Metadata()
  statusCode: number;
}
