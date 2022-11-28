import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestPasswordPoliciesConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestPasswordPoliciesConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestPasswordPoliciesConfigHeaders;
}


export class RequestPasswordPoliciesConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
