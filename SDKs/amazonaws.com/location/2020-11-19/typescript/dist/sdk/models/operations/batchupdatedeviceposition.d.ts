import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchUpdateDevicePositionPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class BatchUpdateDevicePositionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpdateDevicePositionRequestBody extends SpeakeasyBase {
    updates: shared.DevicePositionUpdate[];
}
export declare class BatchUpdateDevicePositionRequest extends SpeakeasyBase {
    pathParams: BatchUpdateDevicePositionPathParams;
    headers: BatchUpdateDevicePositionHeaders;
    request: BatchUpdateDevicePositionRequestBody;
}
export declare class BatchUpdateDevicePositionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchUpdateDevicePositionResponse?: shared.BatchUpdateDevicePositionResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
