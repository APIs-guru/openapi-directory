import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateMemberFromGroupXAmzTargetEnum {
    WorkMailServiceDisassociateMemberFromGroup = "WorkMailService.DisassociateMemberFromGroup"
}
export declare class DisassociateMemberFromGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateMemberFromGroupXAmzTargetEnum;
}
export declare class DisassociateMemberFromGroupRequest extends SpeakeasyBase {
    headers: DisassociateMemberFromGroupHeaders;
    request: shared.DisassociateMemberFromGroupRequest;
}
export declare class DisassociateMemberFromGroupResponse extends SpeakeasyBase {
    contentType: string;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    disassociateMemberFromGroupResponse?: Map<string, any>;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
