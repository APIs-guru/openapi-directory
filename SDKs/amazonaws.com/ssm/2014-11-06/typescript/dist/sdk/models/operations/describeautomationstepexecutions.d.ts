import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAutomationStepExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeAutomationStepExecutionsXAmzTargetEnum {
    AmazonSsmDescribeAutomationStepExecutions = "AmazonSSM.DescribeAutomationStepExecutions"
}
export declare class DescribeAutomationStepExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutomationStepExecutionsXAmzTargetEnum;
}
export declare class DescribeAutomationStepExecutionsRequest extends SpeakeasyBase {
    queryParams: DescribeAutomationStepExecutionsQueryParams;
    headers: DescribeAutomationStepExecutionsHeaders;
    request: shared.DescribeAutomationStepExecutionsRequest;
}
export declare class DescribeAutomationStepExecutionsResponse extends SpeakeasyBase {
    automationExecutionNotFoundException?: any;
    contentType: string;
    describeAutomationStepExecutionsResult?: shared.DescribeAutomationStepExecutionsResult;
    internalServerError?: any;
    invalidFilterKey?: any;
    invalidFilterValue?: any;
    invalidNextToken?: any;
    statusCode: number;
}
