import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReturnPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetReturnPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetReturnPoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReturnPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReturnPoliciesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetReturnPoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetReturnPoliciesSecurity;
}


export class GetReturnPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  returnPolicyResponse?: shared.ReturnPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
