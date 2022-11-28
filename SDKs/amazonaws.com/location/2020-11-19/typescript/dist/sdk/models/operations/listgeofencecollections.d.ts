import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGeofenceCollectionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListGeofenceCollectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGeofenceCollectionsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListGeofenceCollectionsRequest extends SpeakeasyBase {
    queryParams: ListGeofenceCollectionsQueryParams;
    headers: ListGeofenceCollectionsHeaders;
    request: ListGeofenceCollectionsRequestBody;
}
export declare class ListGeofenceCollectionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listGeofenceCollectionsResponse?: shared.ListGeofenceCollectionsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
