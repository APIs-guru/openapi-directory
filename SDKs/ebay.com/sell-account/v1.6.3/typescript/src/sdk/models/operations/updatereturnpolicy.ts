import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateReturnPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=return_policy_id" })
  returnPolicyId: string;
}


export class UpdateReturnPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateReturnPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateReturnPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReturnPolicyRequest;

  @SpeakeasyMetadata()
  security: UpdateReturnPolicySecurity;
}


export class UpdateReturnPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  setReturnPolicyResponse?: shared.SetReturnPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
