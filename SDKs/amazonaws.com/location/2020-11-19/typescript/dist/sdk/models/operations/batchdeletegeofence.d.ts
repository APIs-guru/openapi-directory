import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchDeleteGeofencePathParams extends SpeakeasyBase {
    collectionName: string;
}
export declare class BatchDeleteGeofenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteGeofenceRequestBody extends SpeakeasyBase {
    geofenceIds: string[];
}
export declare class BatchDeleteGeofenceRequest extends SpeakeasyBase {
    pathParams: BatchDeleteGeofencePathParams;
    headers: BatchDeleteGeofenceHeaders;
    request: BatchDeleteGeofenceRequestBody;
}
export declare class BatchDeleteGeofenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchDeleteGeofenceResponse?: shared.BatchDeleteGeofenceResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
