import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReturnPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;
}


export class GetReturnPoliciesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReturnPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReturnPoliciesQueryParams;

  @Metadata()
  security: GetReturnPoliciesSecurity;
}


export class GetReturnPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  returnPolicyResponse?: shared.ReturnPolicyResponse;

  @Metadata()
  statusCode: number;
}
