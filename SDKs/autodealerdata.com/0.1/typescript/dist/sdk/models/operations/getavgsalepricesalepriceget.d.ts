import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAvgSalePriceSalePriceGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    regionName?: string;
}
export declare class GetAvgSalePriceSalePriceGetRequest extends SpeakeasyBase {
    queryParams: GetAvgSalePriceSalePriceGetQueryParams;
}
export declare class GetAvgSalePriceSalePriceGetResponse extends SpeakeasyBase {
    basicModelStatsResp?: shared.BasicModelStatsResp;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
