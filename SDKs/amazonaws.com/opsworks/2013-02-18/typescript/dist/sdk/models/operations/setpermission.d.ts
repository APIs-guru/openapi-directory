import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetPermissionXAmzTargetEnum {
    OpsWorks20130218SetPermission = "OpsWorks_20130218.SetPermission"
}
export declare class SetPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetPermissionXAmzTargetEnum;
}
export declare class SetPermissionRequest extends SpeakeasyBase {
    headers: SetPermissionHeaders;
    request: shared.SetPermissionRequest;
}
export declare class SetPermissionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
