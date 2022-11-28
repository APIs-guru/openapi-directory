import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductAdoptionPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetProductAdoptionPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetProductAdoptionPoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetProductAdoptionPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductAdoptionPoliciesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductAdoptionPoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetProductAdoptionPoliciesSecurity;
}


export class GetProductAdoptionPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productAdoptionPolicyResponse?: shared.ProductAdoptionPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
