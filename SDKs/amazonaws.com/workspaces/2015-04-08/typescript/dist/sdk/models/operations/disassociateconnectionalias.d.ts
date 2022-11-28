import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateConnectionAliasXAmzTargetEnum {
    WorkspacesServiceDisassociateConnectionAlias = "WorkspacesService.DisassociateConnectionAlias"
}
export declare class DisassociateConnectionAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateConnectionAliasXAmzTargetEnum;
}
export declare class DisassociateConnectionAliasRequest extends SpeakeasyBase {
    headers: DisassociateConnectionAliasHeaders;
    request: shared.DisassociateConnectionAliasRequest;
}
export declare class DisassociateConnectionAliasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateConnectionAliasResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
