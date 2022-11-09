import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestPasswordPoliciesConfigInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestPasswordPoliciesConfigInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestPasswordPoliciesConfigInfoHeaders;
}


export class RequestPasswordPoliciesConfigInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @Metadata()
  statusCode: number;
}
