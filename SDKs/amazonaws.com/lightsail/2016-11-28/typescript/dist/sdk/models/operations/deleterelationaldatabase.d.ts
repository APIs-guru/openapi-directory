import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128DeleteRelationalDatabase = "Lightsail_20161128.DeleteRelationalDatabase"
}
export declare class DeleteRelationalDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRelationalDatabaseXAmzTargetEnum;
}
export declare class DeleteRelationalDatabaseRequest extends SpeakeasyBase {
    headers: DeleteRelationalDatabaseHeaders;
    request: shared.DeleteRelationalDatabaseRequest;
}
export declare class DeleteRelationalDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteRelationalDatabaseResult?: shared.DeleteRelationalDatabaseResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
