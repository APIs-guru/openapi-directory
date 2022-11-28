import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyAccountXAmzTargetEnum {
    WorkspacesServiceModifyAccount = "WorkspacesService.ModifyAccount"
}
export declare class ModifyAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyAccountXAmzTargetEnum;
}
export declare class ModifyAccountRequest extends SpeakeasyBase {
    headers: ModifyAccountHeaders;
    request: shared.ModifyAccountRequest;
}
export declare class ModifyAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    modifyAccountResult?: Map<string, any>;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
