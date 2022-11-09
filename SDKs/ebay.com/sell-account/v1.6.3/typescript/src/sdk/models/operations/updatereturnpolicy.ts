import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateReturnPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=return_policy_id" })
  returnPolicyId: string;
}


export class UpdateReturnPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateReturnPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateReturnPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReturnPolicyRequest;

  @Metadata()
  security: UpdateReturnPolicySecurity;
}


export class UpdateReturnPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  setReturnPolicyResponse?: shared.SetReturnPolicyResponse;

  @Metadata()
  statusCode: number;
}
