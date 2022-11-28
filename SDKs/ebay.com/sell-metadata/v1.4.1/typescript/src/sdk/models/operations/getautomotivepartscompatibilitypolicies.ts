import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutomotivePartsCompatibilityPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetAutomotivePartsCompatibilityPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetAutomotivePartsCompatibilityPoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAutomotivePartsCompatibilityPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomotivePartsCompatibilityPoliciesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAutomotivePartsCompatibilityPoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetAutomotivePartsCompatibilityPoliciesSecurity;
}


export class GetAutomotivePartsCompatibilityPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automotivePartsCompatibilityPolicyResponse?: shared.AutomotivePartsCompatibilityPolicyResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
