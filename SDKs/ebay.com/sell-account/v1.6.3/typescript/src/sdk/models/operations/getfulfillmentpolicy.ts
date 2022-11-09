import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFulfillmentPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentPolicyId" })
  fulfillmentPolicyId: string;
}


export class GetFulfillmentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetFulfillmentPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFulfillmentPolicyPathParams;

  @Metadata()
  security: GetFulfillmentPolicySecurity;
}


export class GetFulfillmentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fulfillmentPolicy?: shared.FulfillmentPolicy;

  @Metadata()
  statusCode: number;
}
