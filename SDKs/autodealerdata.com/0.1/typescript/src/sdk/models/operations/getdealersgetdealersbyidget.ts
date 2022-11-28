import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDealersGetDealersByIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealerID" })
  dealerId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetDealersGetDealersByIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDealersGetDealersByIdGetQueryParams;
}


export class GetDealersGetDealersByIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealershipDataResp?: shared.DealershipDataResp;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
