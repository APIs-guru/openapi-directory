import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFulfillmentPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;
}


export class GetFulfillmentPoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetFulfillmentPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFulfillmentPoliciesQueryParams;

  @Metadata()
  security: GetFulfillmentPoliciesSecurity;
}


export class GetFulfillmentPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fulfillmentPolicyResponse?: shared.FulfillmentPolicyResponse;

  @Metadata()
  statusCode: number;
}
