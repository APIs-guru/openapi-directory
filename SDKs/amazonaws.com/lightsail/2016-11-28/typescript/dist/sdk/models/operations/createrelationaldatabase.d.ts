import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128CreateRelationalDatabase = "Lightsail_20161128.CreateRelationalDatabase"
}
export declare class CreateRelationalDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRelationalDatabaseXAmzTargetEnum;
}
export declare class CreateRelationalDatabaseRequest extends SpeakeasyBase {
    headers: CreateRelationalDatabaseHeaders;
    request: shared.CreateRelationalDatabaseRequest;
}
export declare class CreateRelationalDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createRelationalDatabaseResult?: shared.CreateRelationalDatabaseResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
