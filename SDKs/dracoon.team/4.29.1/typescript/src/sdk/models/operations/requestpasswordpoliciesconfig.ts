import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestPasswordPoliciesConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestPasswordPoliciesConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestPasswordPoliciesConfigHeaders;
}


export class RequestPasswordPoliciesConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @Metadata()
  statusCode: number;
}
