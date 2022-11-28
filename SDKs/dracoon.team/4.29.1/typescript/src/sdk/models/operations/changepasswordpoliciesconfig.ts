import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangePasswordPoliciesConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ChangePasswordPoliciesConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ChangePasswordPoliciesConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePasswordPoliciesConfig;
}


export class ChangePasswordPoliciesConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
