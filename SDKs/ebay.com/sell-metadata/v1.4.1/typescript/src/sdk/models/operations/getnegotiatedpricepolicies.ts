import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNegotiatedPricePoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetNegotiatedPricePoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetNegotiatedPricePoliciesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetNegotiatedPricePoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNegotiatedPricePoliciesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNegotiatedPricePoliciesQueryParams;

  @SpeakeasyMetadata()
  security: GetNegotiatedPricePoliciesSecurity;
}


export class GetNegotiatedPricePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  negotiatedPricePolicyResponse?: shared.NegotiatedPricePolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
