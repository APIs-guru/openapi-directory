import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class DescribeTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeTaskRequest extends SpeakeasyBase {
    pathParams: DescribeTaskPathParams;
    headers: DescribeTaskHeaders;
}
export declare class DescribeTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeTaskOutput?: shared.DescribeTaskOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
