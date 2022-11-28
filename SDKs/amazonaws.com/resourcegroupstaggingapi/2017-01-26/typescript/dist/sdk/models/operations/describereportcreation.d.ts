import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeReportCreationXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126DescribeReportCreation = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation"
}
export declare class DescribeReportCreationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReportCreationXAmzTargetEnum;
}
export declare class DescribeReportCreationRequest extends SpeakeasyBase {
    headers: DescribeReportCreationHeaders;
    request: Map<string, any>;
}
export declare class DescribeReportCreationResponse extends SpeakeasyBase {
    constraintViolationException?: any;
    contentType: string;
    describeReportCreationOutput?: shared.DescribeReportCreationOutput;
    internalServiceException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttledException?: any;
}
