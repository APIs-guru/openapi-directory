import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchDescribeSimulationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDescribeSimulationJobRequestBody extends SpeakeasyBase {
    jobs: string[];
}
export declare class BatchDescribeSimulationJobRequest extends SpeakeasyBase {
    headers: BatchDescribeSimulationJobHeaders;
    request: BatchDescribeSimulationJobRequestBody;
}
export declare class BatchDescribeSimulationJobResponse extends SpeakeasyBase {
    batchDescribeSimulationJobResponse?: shared.BatchDescribeSimulationJobResponse;
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
