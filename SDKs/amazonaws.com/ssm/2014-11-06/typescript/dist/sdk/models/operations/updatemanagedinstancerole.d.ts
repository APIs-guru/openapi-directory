import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateManagedInstanceRoleXAmzTargetEnum {
    AmazonSsmUpdateManagedInstanceRole = "AmazonSSM.UpdateManagedInstanceRole"
}
export declare class UpdateManagedInstanceRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateManagedInstanceRoleXAmzTargetEnum;
}
export declare class UpdateManagedInstanceRoleRequest extends SpeakeasyBase {
    headers: UpdateManagedInstanceRoleHeaders;
    request: shared.UpdateManagedInstanceRoleRequest;
}
export declare class UpdateManagedInstanceRoleResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidInstanceId?: any;
    statusCode: number;
    updateManagedInstanceRoleResult?: Map<string, any>;
}
