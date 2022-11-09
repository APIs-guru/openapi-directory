import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAutomotivePartsCompatibilityPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetAutomotivePartsCompatibilityPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetAutomotivePartsCompatibilityPoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAutomotivePartsCompatibilityPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomotivePartsCompatibilityPoliciesPathParams;

  @Metadata()
  queryParams: GetAutomotivePartsCompatibilityPoliciesQueryParams;

  @Metadata()
  security: GetAutomotivePartsCompatibilityPoliciesSecurity;
}


export class GetAutomotivePartsCompatibilityPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  automotivePartsCompatibilityPolicyResponse?: shared.AutomotivePartsCompatibilityPolicyResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
