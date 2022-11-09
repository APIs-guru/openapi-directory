import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeStorageConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeStorageConfigurationRequest extends SpeakeasyBase {
    headers: DescribeStorageConfigurationHeaders;
}
export declare class DescribeStorageConfigurationResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    describeStorageConfigurationResponse?: shared.DescribeStorageConfigurationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
