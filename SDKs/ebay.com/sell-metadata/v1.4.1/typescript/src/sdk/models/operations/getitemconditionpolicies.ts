import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemConditionPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetItemConditionPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetItemConditionPoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetItemConditionPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemConditionPoliciesPathParams;

  @Metadata()
  queryParams: GetItemConditionPoliciesQueryParams;

  @Metadata()
  security: GetItemConditionPoliciesSecurity;
}


export class GetItemConditionPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemConditionPolicyResponse?: shared.ItemConditionPolicyResponse;

  @Metadata()
  statusCode: number;
}
