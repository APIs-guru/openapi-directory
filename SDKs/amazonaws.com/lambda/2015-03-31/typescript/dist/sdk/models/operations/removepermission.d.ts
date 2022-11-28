import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemovePermissionPathParams extends SpeakeasyBase {
    functionName: string;
    statementId: string;
}
export declare class RemovePermissionQueryParams extends SpeakeasyBase {
    qualifier?: string;
    revisionId?: string;
}
export declare class RemovePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemovePermissionRequest extends SpeakeasyBase {
    pathParams: RemovePermissionPathParams;
    queryParams: RemovePermissionQueryParams;
    headers: RemovePermissionHeaders;
}
export declare class RemovePermissionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    preconditionFailedException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
