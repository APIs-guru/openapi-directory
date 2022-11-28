import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateIpGroupXAmzTargetEnum {
    WorkspacesServiceCreateIpGroup = "WorkspacesService.CreateIpGroup"
}
export declare class CreateIpGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIpGroupXAmzTargetEnum;
}
export declare class CreateIpGroupRequest extends SpeakeasyBase {
    headers: CreateIpGroupHeaders;
    request: shared.CreateIpGroupRequest;
}
export declare class CreateIpGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createIpGroupResult?: shared.CreateIpGroupResult;
    invalidParameterValuesException?: any;
    resourceAlreadyExistsException?: any;
    resourceCreationFailedException?: any;
    resourceLimitExceededException?: any;
    statusCode: number;
}
