import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeSimulationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSimulationJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class DescribeSimulationJobRequest extends SpeakeasyBase {
    headers: DescribeSimulationJobHeaders;
    request: DescribeSimulationJobRequestBody;
}
export declare class DescribeSimulationJobResponse extends SpeakeasyBase {
    contentType: string;
    describeSimulationJobResponse?: shared.DescribeSimulationJobResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
