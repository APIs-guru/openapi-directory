import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFulfillmentPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;
}


export class GetFulfillmentPoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetFulfillmentPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFulfillmentPoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetFulfillmentPoliciesSecurity;
}


export class GetFulfillmentPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fulfillmentPolicyResponse?: shared.FulfillmentPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
