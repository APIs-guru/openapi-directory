import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFulfillmentPolicyByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetFulfillmentPolicyByNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetFulfillmentPolicyByNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFulfillmentPolicyByNameQueryParams;

  @Metadata()
  security: GetFulfillmentPolicyByNameSecurity;
}


export class GetFulfillmentPolicyByNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fulfillmentPolicy?: shared.FulfillmentPolicy;

  @Metadata()
  statusCode: number;
}
