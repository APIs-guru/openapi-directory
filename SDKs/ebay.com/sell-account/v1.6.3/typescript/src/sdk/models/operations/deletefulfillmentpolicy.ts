import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFulfillmentPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" })
  fulfillmentPolicyId: string;
}


export class DeleteFulfillmentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteFulfillmentPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFulfillmentPolicyPathParams;

  @Metadata()
  security: DeleteFulfillmentPolicySecurity;
}


export class DeleteFulfillmentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
