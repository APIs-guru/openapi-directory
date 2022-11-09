import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReturnPolicyByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetReturnPolicyByNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReturnPolicyByNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReturnPolicyByNameQueryParams;

  @Metadata()
  security: GetReturnPolicyByNameSecurity;
}


export class GetReturnPolicyByNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  returnPolicy?: shared.ReturnPolicy;

  @Metadata()
  statusCode: number;
}
