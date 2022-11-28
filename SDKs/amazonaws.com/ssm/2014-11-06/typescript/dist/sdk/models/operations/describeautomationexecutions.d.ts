import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAutomationExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeAutomationExecutionsXAmzTargetEnum {
    AmazonSsmDescribeAutomationExecutions = "AmazonSSM.DescribeAutomationExecutions"
}
export declare class DescribeAutomationExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutomationExecutionsXAmzTargetEnum;
}
export declare class DescribeAutomationExecutionsRequest extends SpeakeasyBase {
    queryParams: DescribeAutomationExecutionsQueryParams;
    headers: DescribeAutomationExecutionsHeaders;
    request: shared.DescribeAutomationExecutionsRequest;
}
export declare class DescribeAutomationExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    describeAutomationExecutionsResult?: shared.DescribeAutomationExecutionsResult;
    internalServerError?: any;
    invalidFilterKey?: any;
    invalidFilterValue?: any;
    invalidNextToken?: any;
    statusCode: number;
}
