import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvgSalePriceSalePriceGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetAvgSalePriceSalePriceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAvgSalePriceSalePriceGetQueryParams;
}


export class GetAvgSalePriceSalePriceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  basicModelStatsResp?: shared.BasicModelStatsResp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
