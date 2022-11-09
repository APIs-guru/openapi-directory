import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteGroupXAmzTargetEnum {
    WorkMailServiceDeleteGroup = "WorkMailService.DeleteGroup"
}
export declare class DeleteGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGroupXAmzTargetEnum;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    headers: DeleteGroupHeaders;
    request: shared.DeleteGroupRequest;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteGroupResponse?: Map<string, any>;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
