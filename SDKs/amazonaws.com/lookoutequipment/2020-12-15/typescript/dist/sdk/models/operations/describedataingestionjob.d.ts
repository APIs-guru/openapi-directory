import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDataIngestionJobXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceDescribeDataIngestionJob = "AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob"
}
export declare class DescribeDataIngestionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDataIngestionJobXAmzTargetEnum;
}
export declare class DescribeDataIngestionJobRequest extends SpeakeasyBase {
    headers: DescribeDataIngestionJobHeaders;
    request: shared.DescribeDataIngestionJobRequest;
}
export declare class DescribeDataIngestionJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeDataIngestionJobResponse?: shared.DescribeDataIngestionJobResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
