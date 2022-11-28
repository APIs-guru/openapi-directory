import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDealersGetDealersByRegionGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetDealersGetDealersByRegionGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDealersGetDealersByRegionGetQueryParams;
}


export class GetDealersGetDealersByRegionGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dealershipDataPaginatedResp?: shared.DealershipDataPaginatedResp;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
