import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFulfillmentPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" })
  fulfillmentPolicyId: string;
}


export class GetFulfillmentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetFulfillmentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFulfillmentPolicyPathParams;

  @SpeakeasyMetadata()
  security: GetFulfillmentPolicySecurity;
}


export class GetFulfillmentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fulfillmentPolicy?: shared.FulfillmentPolicy;

  @SpeakeasyMetadata()
  statusCode: number;
}
