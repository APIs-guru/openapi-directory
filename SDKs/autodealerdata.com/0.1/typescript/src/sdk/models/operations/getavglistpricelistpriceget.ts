import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAvgListPriceListPriceGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetAvgListPriceListPriceGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAvgListPriceListPriceGetQueryParams;
}


export class GetAvgListPriceListPriceGetResponse extends SpeakeasyBase {
  @Metadata()
  basicModelStatsResp?: shared.BasicModelStatsResp;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
