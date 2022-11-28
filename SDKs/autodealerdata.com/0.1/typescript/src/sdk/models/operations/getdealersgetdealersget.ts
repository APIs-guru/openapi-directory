import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDealersGetDealersGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zipCode" })
  zipCode: number;
}


export class GetDealersGetDealersGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDealersGetDealersGetQueryParams;
}


export class GetDealersGetDealersGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealershipDataResp?: shared.DealershipDataResp;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
