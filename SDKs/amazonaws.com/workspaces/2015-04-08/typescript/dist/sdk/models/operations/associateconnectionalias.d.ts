import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateConnectionAliasXAmzTargetEnum {
    WorkspacesServiceAssociateConnectionAlias = "WorkspacesService.AssociateConnectionAlias"
}
export declare class AssociateConnectionAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateConnectionAliasXAmzTargetEnum;
}
export declare class AssociateConnectionAliasRequest extends SpeakeasyBase {
    headers: AssociateConnectionAliasHeaders;
    request: shared.AssociateConnectionAliasRequest;
}
export declare class AssociateConnectionAliasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateConnectionAliasResult?: shared.AssociateConnectionAliasResult;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    resourceAssociatedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
