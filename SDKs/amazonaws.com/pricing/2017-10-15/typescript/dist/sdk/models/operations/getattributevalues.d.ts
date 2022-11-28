import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttributeValuesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetAttributeValuesXAmzTargetEnum {
    AwsPriceListServiceGetAttributeValues = "AWSPriceListService.GetAttributeValues"
}
export declare class GetAttributeValuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAttributeValuesXAmzTargetEnum;
}
export declare class GetAttributeValuesRequest extends SpeakeasyBase {
    queryParams: GetAttributeValuesQueryParams;
    headers: GetAttributeValuesHeaders;
    request: shared.GetAttributeValuesRequest;
}
export declare class GetAttributeValuesResponse extends SpeakeasyBase {
    contentType: string;
    expiredNextTokenException?: any;
    getAttributeValuesResponse?: shared.GetAttributeValuesResponse;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
