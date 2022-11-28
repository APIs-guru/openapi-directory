import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFulfillmentPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" })
  fulfillmentPolicyId: string;
}


export class UpdateFulfillmentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateFulfillmentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFulfillmentPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FulfillmentPolicyRequest;

  @SpeakeasyMetadata()
  security: UpdateFulfillmentPolicySecurity;
}


export class UpdateFulfillmentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
