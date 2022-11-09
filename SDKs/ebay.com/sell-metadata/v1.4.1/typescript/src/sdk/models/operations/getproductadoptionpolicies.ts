import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductAdoptionPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetProductAdoptionPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetProductAdoptionPoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetProductAdoptionPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductAdoptionPoliciesPathParams;

  @Metadata()
  queryParams: GetProductAdoptionPoliciesQueryParams;

  @Metadata()
  security: GetProductAdoptionPoliciesSecurity;
}


export class GetProductAdoptionPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productAdoptionPolicyResponse?: shared.ProductAdoptionPolicyResponse;

  @Metadata()
  statusCode: number;
}
