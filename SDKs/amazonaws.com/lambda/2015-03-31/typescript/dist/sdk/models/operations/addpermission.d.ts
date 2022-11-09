import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddPermissionPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class AddPermissionQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class AddPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddPermissionRequestBody extends SpeakeasyBase {
    action: string;
    eventSourceToken?: string;
    principal: string;
    revisionId?: string;
    sourceAccount?: string;
    sourceArn?: string;
    statementId: string;
}
export declare class AddPermissionRequest extends SpeakeasyBase {
    pathParams: AddPermissionPathParams;
    queryParams: AddPermissionQueryParams;
    headers: AddPermissionHeaders;
    request: AddPermissionRequestBody;
}
export declare class AddPermissionResponse extends SpeakeasyBase {
    addPermissionResponse?: shared.AddPermissionResponse;
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
