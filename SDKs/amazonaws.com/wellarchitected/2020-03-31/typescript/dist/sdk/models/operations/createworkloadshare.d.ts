import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorkloadSharePathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class CreateWorkloadShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateWorkloadShareRequestBodyPermissionTypeEnum {
    Readonly = "READONLY",
    Contributor = "CONTRIBUTOR"
}
export declare class CreateWorkloadShareRequestBody extends SpeakeasyBase {
    clientRequestToken: string;
    permissionType: CreateWorkloadShareRequestBodyPermissionTypeEnum;
    sharedWith: string;
}
export declare class CreateWorkloadShareRequest extends SpeakeasyBase {
    pathParams: CreateWorkloadSharePathParams;
    headers: CreateWorkloadShareHeaders;
    request: CreateWorkloadShareRequestBody;
}
export declare class CreateWorkloadShareResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createWorkloadShareOutput?: shared.CreateWorkloadShareOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
