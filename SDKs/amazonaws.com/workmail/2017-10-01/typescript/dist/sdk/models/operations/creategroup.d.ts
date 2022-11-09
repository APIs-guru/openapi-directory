import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateGroupXAmzTargetEnum {
    WorkMailServiceCreateGroup = "WorkMailService.CreateGroup"
}
export declare class CreateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGroupXAmzTargetEnum;
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    headers: CreateGroupHeaders;
    request: shared.CreateGroupRequest;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    createGroupResponse?: shared.CreateGroupResponse;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    invalidParameterException?: any;
    nameAvailabilityException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    reservedNameException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
