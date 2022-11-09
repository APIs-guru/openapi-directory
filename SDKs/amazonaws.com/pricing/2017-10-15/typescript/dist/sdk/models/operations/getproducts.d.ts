import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProductsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetProductsXAmzTargetEnum {
    AwsPriceListServiceGetProducts = "AWSPriceListService.GetProducts"
}
export declare class GetProductsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProductsXAmzTargetEnum;
}
export declare class GetProductsRequest extends SpeakeasyBase {
    queryParams: GetProductsQueryParams;
    headers: GetProductsHeaders;
    request: shared.GetProductsRequest;
}
export declare class GetProductsResponse extends SpeakeasyBase {
    contentType: string;
    expiredNextTokenException?: any;
    getProductsResponse?: shared.GetProductsResponse;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
