import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InitiateOpenIdLoginQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=issuer" })
  issuer: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=test" })
  test: boolean;
}


export class InitiateOpenIdLoginRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: InitiateOpenIdLoginQueryParams;
}


export class InitiateOpenIdLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
