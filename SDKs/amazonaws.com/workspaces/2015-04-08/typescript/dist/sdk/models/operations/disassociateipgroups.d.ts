import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateIpGroupsXAmzTargetEnum {
    WorkspacesServiceDisassociateIpGroups = "WorkspacesService.DisassociateIpGroups"
}
export declare class DisassociateIpGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateIpGroupsXAmzTargetEnum;
}
export declare class DisassociateIpGroupsRequest extends SpeakeasyBase {
    headers: DisassociateIpGroupsHeaders;
    request: shared.DisassociateIpGroupsRequest;
}
export declare class DisassociateIpGroupsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateIpGroupsResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
