import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConnectionAliasXAmzTargetEnum {
    WorkspacesServiceDeleteConnectionAlias = "WorkspacesService.DeleteConnectionAlias"
}
export declare class DeleteConnectionAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConnectionAliasXAmzTargetEnum;
}
export declare class DeleteConnectionAliasRequest extends SpeakeasyBase {
    headers: DeleteConnectionAliasHeaders;
    request: shared.DeleteConnectionAliasRequest;
}
export declare class DeleteConnectionAliasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteConnectionAliasResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    resourceAssociatedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
