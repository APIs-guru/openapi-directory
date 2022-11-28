import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWorkloadSharePathParams extends SpeakeasyBase {
    shareId: string;
    workloadId: string;
}
export declare class UpdateWorkloadShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateWorkloadShareRequestBodyPermissionTypeEnum {
    Readonly = "READONLY",
    Contributor = "CONTRIBUTOR"
}
export declare class UpdateWorkloadShareRequestBody extends SpeakeasyBase {
    permissionType: UpdateWorkloadShareRequestBodyPermissionTypeEnum;
}
export declare class UpdateWorkloadShareRequest extends SpeakeasyBase {
    pathParams: UpdateWorkloadSharePathParams;
    headers: UpdateWorkloadShareHeaders;
    request: UpdateWorkloadShareRequestBody;
}
export declare class UpdateWorkloadShareResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateWorkloadShareOutput?: shared.UpdateWorkloadShareOutput;
    validationException?: any;
}
