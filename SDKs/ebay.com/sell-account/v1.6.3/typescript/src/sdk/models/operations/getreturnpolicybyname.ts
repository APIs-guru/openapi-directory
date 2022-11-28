import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReturnPolicyByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetReturnPolicyByNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReturnPolicyByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReturnPolicyByNameQueryParams;

  @SpeakeasyMetadata()
  security: GetReturnPolicyByNameSecurity;
}


export class GetReturnPolicyByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  returnPolicy?: shared.ReturnPolicy;

  @SpeakeasyMetadata()
  statusCode: number;
}
