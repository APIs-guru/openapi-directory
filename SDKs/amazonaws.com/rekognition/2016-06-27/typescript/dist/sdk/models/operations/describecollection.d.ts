import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCollectionXAmzTargetEnum {
    RekognitionServiceDescribeCollection = "RekognitionService.DescribeCollection"
}
export declare class DescribeCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCollectionXAmzTargetEnum;
}
export declare class DescribeCollectionRequest extends SpeakeasyBase {
    headers: DescribeCollectionHeaders;
    request: shared.DescribeCollectionRequest;
}
export declare class DescribeCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeCollectionResponse?: shared.DescribeCollectionResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
