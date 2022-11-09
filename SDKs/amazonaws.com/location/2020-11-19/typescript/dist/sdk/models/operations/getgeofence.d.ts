import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetGeofencePathParams extends SpeakeasyBase {
    collectionName: string;
    geofenceId: string;
}
export declare class GetGeofenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGeofenceRequest extends SpeakeasyBase {
    pathParams: GetGeofencePathParams;
    headers: GetGeofenceHeaders;
}
export declare class GetGeofenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getGeofenceResponse?: shared.GetGeofenceResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
