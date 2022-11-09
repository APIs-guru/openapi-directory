import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddLayerVersionPermissionPathParams extends SpeakeasyBase {
    layerName: string;
    versionNumber: number;
}
export declare class AddLayerVersionPermissionQueryParams extends SpeakeasyBase {
    revisionId?: string;
}
export declare class AddLayerVersionPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddLayerVersionPermissionRequestBody extends SpeakeasyBase {
    action: string;
    organizationId?: string;
    principal: string;
    statementId: string;
}
export declare class AddLayerVersionPermissionRequest extends SpeakeasyBase {
    pathParams: AddLayerVersionPermissionPathParams;
    queryParams: AddLayerVersionPermissionQueryParams;
    headers: AddLayerVersionPermissionHeaders;
    request: AddLayerVersionPermissionRequestBody;
}
export declare class AddLayerVersionPermissionResponse extends SpeakeasyBase {
    addLayerVersionPermissionResponse?: shared.AddLayerVersionPermissionResponse;
    contentType: string;
    invalidParameterValueException?: any;
    policyLengthExceededException?: any;
    preconditionFailedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
