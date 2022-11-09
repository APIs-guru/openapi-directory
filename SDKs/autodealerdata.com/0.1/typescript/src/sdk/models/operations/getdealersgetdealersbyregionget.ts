import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealersGetDealersByRegionGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetDealersGetDealersByRegionGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDealersGetDealersByRegionGetQueryParams;
}


export class GetDealersGetDealersByRegionGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dealershipDataPaginatedResp?: shared.DealershipDataPaginatedResp;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
