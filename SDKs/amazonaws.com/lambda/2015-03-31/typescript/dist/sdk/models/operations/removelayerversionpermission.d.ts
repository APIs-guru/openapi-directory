import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RemoveLayerVersionPermissionPathParams extends SpeakeasyBase {
    layerName: string;
    statementId: string;
    versionNumber: number;
}
export declare class RemoveLayerVersionPermissionQueryParams extends SpeakeasyBase {
    revisionId?: string;
}
export declare class RemoveLayerVersionPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveLayerVersionPermissionRequest extends SpeakeasyBase {
    pathParams: RemoveLayerVersionPermissionPathParams;
    queryParams: RemoveLayerVersionPermissionQueryParams;
    headers: RemoveLayerVersionPermissionHeaders;
}
export declare class RemoveLayerVersionPermissionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    preconditionFailedException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
