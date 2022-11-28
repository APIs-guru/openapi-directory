import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvgListPriceListPriceGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    regionName?: string;
}
export declare class GetAvgListPriceListPriceGetRequest extends SpeakeasyBase {
    queryParams: GetAvgListPriceListPriceGetQueryParams;
}
export declare class GetAvgListPriceListPriceGetResponse extends SpeakeasyBase {
    basicModelStatsResp?: shared.BasicModelStatsResp;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
