import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchPutGeofencePathParams extends SpeakeasyBase {
    collectionName: string;
}
export declare class BatchPutGeofenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchPutGeofenceRequestBody extends SpeakeasyBase {
    entries: shared.BatchPutGeofenceRequestEntry[];
}
export declare class BatchPutGeofenceRequest extends SpeakeasyBase {
    pathParams: BatchPutGeofencePathParams;
    headers: BatchPutGeofenceHeaders;
    request: BatchPutGeofenceRequestBody;
}
export declare class BatchPutGeofenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchPutGeofenceResponse?: shared.BatchPutGeofenceResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
