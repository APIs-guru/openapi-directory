import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompleteOpenIdLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_token" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class CompleteOpenIdLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CompleteOpenIdLoginQueryParams;
}


export class CompleteOpenIdLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  loginResponse?: shared.LoginResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
