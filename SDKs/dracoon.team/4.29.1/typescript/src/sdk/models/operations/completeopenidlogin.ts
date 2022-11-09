import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteOpenIdLoginQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id_token" })
  idToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class CompleteOpenIdLoginRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CompleteOpenIdLoginQueryParams;
}


export class CompleteOpenIdLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  loginResponse?: shared.LoginResponse;

  @Metadata()
  statusCode: number;
}
