import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvgListPriceListPriceGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetAvgListPriceListPriceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAvgListPriceListPriceGetQueryParams;
}


export class GetAvgListPriceListPriceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  basicModelStatsResp?: shared.BasicModelStatsResp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
