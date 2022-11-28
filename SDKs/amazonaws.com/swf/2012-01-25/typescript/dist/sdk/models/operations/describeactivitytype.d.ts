import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceDescribeActivityType = "SimpleWorkflowService.DescribeActivityType"
}
export declare class DescribeActivityTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeActivityTypeXAmzTargetEnum;
}
export declare class DescribeActivityTypeRequest extends SpeakeasyBase {
    headers: DescribeActivityTypeHeaders;
    request: shared.DescribeActivityTypeInput;
}
export declare class DescribeActivityTypeResponse extends SpeakeasyBase {
    activityTypeDetail?: shared.ActivityTypeDetail;
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
