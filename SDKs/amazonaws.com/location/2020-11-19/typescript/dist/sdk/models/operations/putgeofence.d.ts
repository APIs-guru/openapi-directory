import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutGeofencePathParams extends SpeakeasyBase {
    collectionName: string;
    geofenceId: string;
}
export declare class PutGeofenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
**/
export declare class PutGeofenceRequestBodyGeometry extends SpeakeasyBase {
    polygon?: number[][][];
}
export declare class PutGeofenceRequestBody extends SpeakeasyBase {
    geometry: PutGeofenceRequestBodyGeometry;
}
export declare class PutGeofenceRequest extends SpeakeasyBase {
    pathParams: PutGeofencePathParams;
    headers: PutGeofenceHeaders;
    request: PutGeofenceRequestBody;
}
export declare class PutGeofenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    putGeofenceResponse?: shared.PutGeofenceResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
