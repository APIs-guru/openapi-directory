import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateMemberToGroupXAmzTargetEnum {
    WorkMailServiceAssociateMemberToGroup = "WorkMailService.AssociateMemberToGroup"
}
export declare class AssociateMemberToGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateMemberToGroupXAmzTargetEnum;
}
export declare class AssociateMemberToGroupRequest extends SpeakeasyBase {
    headers: AssociateMemberToGroupHeaders;
    request: shared.AssociateMemberToGroupRequest;
}
export declare class AssociateMemberToGroupResponse extends SpeakeasyBase {
    associateMemberToGroupResponse?: Map<string, any>;
    contentType: string;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
