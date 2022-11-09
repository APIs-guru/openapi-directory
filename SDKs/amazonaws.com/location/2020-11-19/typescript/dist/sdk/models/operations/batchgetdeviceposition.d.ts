import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchGetDevicePositionPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class BatchGetDevicePositionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetDevicePositionRequestBody extends SpeakeasyBase {
    deviceIds: string[];
}
export declare class BatchGetDevicePositionRequest extends SpeakeasyBase {
    pathParams: BatchGetDevicePositionPathParams;
    headers: BatchGetDevicePositionHeaders;
    request: BatchGetDevicePositionRequestBody;
}
export declare class BatchGetDevicePositionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchGetDevicePositionResponse?: shared.BatchGetDevicePositionResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
