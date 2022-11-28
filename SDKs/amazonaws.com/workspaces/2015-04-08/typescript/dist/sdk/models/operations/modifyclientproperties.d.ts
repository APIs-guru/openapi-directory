import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyClientPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyClientProperties = "WorkspacesService.ModifyClientProperties"
}
export declare class ModifyClientPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyClientPropertiesXAmzTargetEnum;
}
export declare class ModifyClientPropertiesRequest extends SpeakeasyBase {
    headers: ModifyClientPropertiesHeaders;
    request: shared.ModifyClientPropertiesRequest;
}
export declare class ModifyClientPropertiesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    modifyClientPropertiesResult?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
