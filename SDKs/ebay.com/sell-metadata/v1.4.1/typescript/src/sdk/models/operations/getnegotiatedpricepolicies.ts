import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNegotiatedPricePoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" })
  marketplaceId: string;
}


export class GetNegotiatedPricePoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetNegotiatedPricePoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetNegotiatedPricePoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNegotiatedPricePoliciesPathParams;

  @Metadata()
  queryParams: GetNegotiatedPricePoliciesQueryParams;

  @Metadata()
  security: GetNegotiatedPricePoliciesSecurity;
}


export class GetNegotiatedPricePoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  negotiatedPricePolicyResponse?: shared.NegotiatedPricePolicyResponse;

  @Metadata()
  statusCode: number;
}
