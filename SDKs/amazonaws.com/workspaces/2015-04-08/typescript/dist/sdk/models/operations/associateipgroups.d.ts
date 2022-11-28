import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateIpGroupsXAmzTargetEnum {
    WorkspacesServiceAssociateIpGroups = "WorkspacesService.AssociateIpGroups"
}
export declare class AssociateIpGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateIpGroupsXAmzTargetEnum;
}
export declare class AssociateIpGroupsRequest extends SpeakeasyBase {
    headers: AssociateIpGroupsHeaders;
    request: shared.AssociateIpGroupsRequest;
}
export declare class AssociateIpGroupsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateIpGroupsResult?: Map<string, any>;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
