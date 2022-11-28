import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemConditionPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetItemConditionPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetItemConditionPoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetItemConditionPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemConditionPoliciesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetItemConditionPoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetItemConditionPoliciesSecurity;
}


export class GetItemConditionPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemConditionPolicyResponse?: shared.ItemConditionPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
