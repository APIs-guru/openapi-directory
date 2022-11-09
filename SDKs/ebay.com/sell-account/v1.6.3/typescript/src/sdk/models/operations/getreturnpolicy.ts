import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReturnPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=return_policy_id" })
  returnPolicyId: string;
}


export class GetReturnPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReturnPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReturnPolicyPathParams;

  @Metadata()
  security: GetReturnPolicySecurity;
}


export class GetReturnPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  returnPolicy?: shared.ReturnPolicy;

  @Metadata()
  statusCode: number;
}
