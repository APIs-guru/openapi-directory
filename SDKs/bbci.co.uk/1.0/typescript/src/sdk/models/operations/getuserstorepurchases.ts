import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserStorePurchasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identity_cookie" })
  identityCookie: number;
}


export class GetUserStorePurchasesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUserStorePurchasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserStorePurchasesQueryParams;

  @SpeakeasyMetadata()
  security: GetUserStorePurchasesSecurity;
}


export class GetUserStorePurchasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
