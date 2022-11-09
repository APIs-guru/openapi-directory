import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchEvaluateGeofencesPathParams extends SpeakeasyBase {
    collectionName: string;
}
export declare class BatchEvaluateGeofencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchEvaluateGeofencesRequestBody extends SpeakeasyBase {
    devicePositionUpdates: shared.DevicePositionUpdate[];
}
export declare class BatchEvaluateGeofencesRequest extends SpeakeasyBase {
    pathParams: BatchEvaluateGeofencesPathParams;
    headers: BatchEvaluateGeofencesHeaders;
    request: BatchEvaluateGeofencesRequestBody;
}
export declare class BatchEvaluateGeofencesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchEvaluateGeofencesResponse?: shared.BatchEvaluateGeofencesResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
