import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGeofenceCollectionPathParams extends SpeakeasyBase {
    collectionName: string;
}
export declare class DeleteGeofenceCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGeofenceCollectionRequest extends SpeakeasyBase {
    pathParams: DeleteGeofenceCollectionPathParams;
    headers: DeleteGeofenceCollectionHeaders;
}
export declare class DeleteGeofenceCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteGeofenceCollectionResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
