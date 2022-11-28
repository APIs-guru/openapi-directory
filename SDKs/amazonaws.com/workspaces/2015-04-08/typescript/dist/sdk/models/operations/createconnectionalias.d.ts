import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateConnectionAliasXAmzTargetEnum {
    WorkspacesServiceCreateConnectionAlias = "WorkspacesService.CreateConnectionAlias"
}
export declare class CreateConnectionAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionAliasXAmzTargetEnum;
}
export declare class CreateConnectionAliasRequest extends SpeakeasyBase {
    headers: CreateConnectionAliasHeaders;
    request: shared.CreateConnectionAliasRequest;
}
export declare class CreateConnectionAliasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createConnectionAliasResult?: shared.CreateConnectionAliasResult;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    resourceAlreadyExistsException?: any;
    resourceLimitExceededException?: any;
    statusCode: number;
}
