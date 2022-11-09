import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFulfillmentPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" })
  fulfillmentPolicyId: string;
}


export class UpdateFulfillmentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateFulfillmentPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFulfillmentPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FulfillmentPolicyRequest;

  @Metadata()
  security: UpdateFulfillmentPolicySecurity;
}


export class UpdateFulfillmentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;

  @Metadata()
  statusCode: number;
}
