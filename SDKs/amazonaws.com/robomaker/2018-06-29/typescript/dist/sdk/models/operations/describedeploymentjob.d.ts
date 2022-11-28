import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDeploymentJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDeploymentJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class DescribeDeploymentJobRequest extends SpeakeasyBase {
    headers: DescribeDeploymentJobHeaders;
    request: DescribeDeploymentJobRequestBody;
}
export declare class DescribeDeploymentJobResponse extends SpeakeasyBase {
    contentType: string;
    describeDeploymentJobResponse?: shared.DescribeDeploymentJobResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
