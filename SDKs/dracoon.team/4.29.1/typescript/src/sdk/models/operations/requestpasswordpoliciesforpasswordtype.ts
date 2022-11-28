import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestPasswordPoliciesForPasswordTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=password_type" })
  passwordType: any;
}


export class RequestPasswordPoliciesForPasswordTypeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestPasswordPoliciesForPasswordTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestPasswordPoliciesForPasswordTypePathParams;

  @SpeakeasyMetadata()
  headers: RequestPasswordPoliciesForPasswordTypeHeaders;
}


export class RequestPasswordPoliciesForPasswordTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
