import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReturnPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=return_policy_id" })
  returnPolicyId: string;
}


export class GetReturnPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReturnPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReturnPolicyPathParams;

  @SpeakeasyMetadata()
  security: GetReturnPolicySecurity;
}


export class GetReturnPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  returnPolicy?: shared.ReturnPolicy;

  @SpeakeasyMetadata()
  statusCode: number;
}
