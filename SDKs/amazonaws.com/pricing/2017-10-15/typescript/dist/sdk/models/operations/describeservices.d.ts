import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeServicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeServicesXAmzTargetEnum {
    AwsPriceListServiceDescribeServices = "AWSPriceListService.DescribeServices"
}
export declare class DescribeServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServicesXAmzTargetEnum;
}
export declare class DescribeServicesRequest extends SpeakeasyBase {
    queryParams: DescribeServicesQueryParams;
    headers: DescribeServicesHeaders;
    request: shared.DescribeServicesRequest;
}
export declare class DescribeServicesResponse extends SpeakeasyBase {
    contentType: string;
    describeServicesResponse?: shared.DescribeServicesResponse;
    expiredNextTokenException?: any;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
