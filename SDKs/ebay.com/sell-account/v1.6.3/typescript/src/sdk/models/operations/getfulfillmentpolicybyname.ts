import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFulfillmentPolicyByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetFulfillmentPolicyByNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetFulfillmentPolicyByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFulfillmentPolicyByNameQueryParams;

  @SpeakeasyMetadata()
  security: GetFulfillmentPolicyByNameSecurity;
}


export class GetFulfillmentPolicyByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fulfillmentPolicy?: shared.FulfillmentPolicy;

  @SpeakeasyMetadata()
  statusCode: number;
}
