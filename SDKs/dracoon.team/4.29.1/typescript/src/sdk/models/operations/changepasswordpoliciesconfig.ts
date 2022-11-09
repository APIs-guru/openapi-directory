import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangePasswordPoliciesConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ChangePasswordPoliciesConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: ChangePasswordPoliciesConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePasswordPoliciesConfig;
}


export class ChangePasswordPoliciesConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @Metadata()
  statusCode: number;
}
