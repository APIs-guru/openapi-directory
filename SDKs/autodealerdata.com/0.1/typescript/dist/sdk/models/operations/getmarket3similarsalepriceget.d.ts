import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMarket3SimilarSalePriceGetQueryParams extends SpeakeasyBase {
    daysBack?: number;
    jwt: string;
    regionName?: string;
    sameYear?: boolean;
    vin: string;
}
export declare class GetMarket3SimilarSalePriceGetRequest extends SpeakeasyBase {
    queryParams: GetMarket3SimilarSalePriceGetQueryParams;
}
export declare class GetMarket3SimilarSalePriceGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    similarSalePriceResp?: shared.SimilarSalePriceResp;
    statusCode: number;
}
