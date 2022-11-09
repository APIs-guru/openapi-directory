import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAvgSalePriceSalePriceGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetAvgSalePriceSalePriceGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAvgSalePriceSalePriceGetQueryParams;
}


export class GetAvgSalePriceSalePriceGetResponse extends SpeakeasyBase {
  @Metadata()
  basicModelStatsResp?: shared.BasicModelStatsResp;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
