import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestPasswordPoliciesForPasswordTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=password_type" })
  passwordType: any;
}


export class RequestPasswordPoliciesForPasswordTypeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestPasswordPoliciesForPasswordTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestPasswordPoliciesForPasswordTypePathParams;

  @Metadata()
  headers: RequestPasswordPoliciesForPasswordTypeHeaders;
}


export class RequestPasswordPoliciesForPasswordTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @Metadata()
  statusCode: number;
}
