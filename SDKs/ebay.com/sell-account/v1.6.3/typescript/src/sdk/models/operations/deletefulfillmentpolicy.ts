import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFulfillmentPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" })
  fulfillmentPolicyId: string;
}


export class DeleteFulfillmentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteFulfillmentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFulfillmentPolicyPathParams;

  @SpeakeasyMetadata()
  security: DeleteFulfillmentPolicySecurity;
}


export class DeleteFulfillmentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
