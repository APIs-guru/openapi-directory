import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeSimulationJobBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSimulationJobBatchRequestBody extends SpeakeasyBase {
    batch: string;
}
export declare class DescribeSimulationJobBatchRequest extends SpeakeasyBase {
    headers: DescribeSimulationJobBatchHeaders;
    request: DescribeSimulationJobBatchRequestBody;
}
export declare class DescribeSimulationJobBatchResponse extends SpeakeasyBase {
    contentType: string;
    describeSimulationJobBatchResponse?: shared.DescribeSimulationJobBatchResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
