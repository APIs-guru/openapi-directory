import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InitiateOpenIdLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=issuer" })
  issuer: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=test" })
  test: boolean;
}


export class InitiateOpenIdLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: InitiateOpenIdLoginQueryParams;
}


export class InitiateOpenIdLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
