import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeSimulationApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSimulationApplicationRequestBody extends SpeakeasyBase {
    application: string;
    applicationVersion?: string;
}
export declare class DescribeSimulationApplicationRequest extends SpeakeasyBase {
    headers: DescribeSimulationApplicationHeaders;
    request: DescribeSimulationApplicationRequestBody;
}
export declare class DescribeSimulationApplicationResponse extends SpeakeasyBase {
    contentType: string;
    describeSimulationApplicationResponse?: shared.DescribeSimulationApplicationResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
