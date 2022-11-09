import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListGeofencesPathParams extends SpeakeasyBase {
    collectionName: string;
}
export declare class ListGeofencesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListGeofencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGeofencesRequestBody extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListGeofencesRequest extends SpeakeasyBase {
    pathParams: ListGeofencesPathParams;
    queryParams: ListGeofencesQueryParams;
    headers: ListGeofencesHeaders;
    request: ListGeofencesRequestBody;
}
export declare class ListGeofencesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listGeofencesResponse?: shared.ListGeofencesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
