import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3CountriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3CountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetV3CountriesHeaders;
}


export class GetV3CountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  countriesList?: shared.CountriesList;

  @SpeakeasyMetadata()
  statusCode: number;
}
