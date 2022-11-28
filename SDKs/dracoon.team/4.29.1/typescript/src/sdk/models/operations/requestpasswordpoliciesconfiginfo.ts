import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestPasswordPoliciesConfigInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestPasswordPoliciesConfigInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestPasswordPoliciesConfigInfoHeaders;
}


export class RequestPasswordPoliciesConfigInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  passwordPoliciesConfig?: shared.PasswordPoliciesConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
