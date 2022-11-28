import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelSaleBucketsSalePriceHistogramGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    modelName: string;
    regionName?: string;
}
export declare class GetModelSaleBucketsSalePriceHistogramGetRequest extends SpeakeasyBase {
    queryParams: GetModelSaleBucketsSalePriceHistogramGetQueryParams;
}
export declare class GetModelSaleBucketsSalePriceHistogramGetResponse extends SpeakeasyBase {
    bucketResp?: shared.BucketResp;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
