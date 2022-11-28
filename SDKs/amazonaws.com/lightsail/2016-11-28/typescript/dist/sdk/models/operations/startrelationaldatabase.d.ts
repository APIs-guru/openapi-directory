import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128StartRelationalDatabase = "Lightsail_20161128.StartRelationalDatabase"
}
export declare class StartRelationalDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartRelationalDatabaseXAmzTargetEnum;
}
export declare class StartRelationalDatabaseRequest extends SpeakeasyBase {
    headers: StartRelationalDatabaseHeaders;
    request: shared.StartRelationalDatabaseRequest;
}
export declare class StartRelationalDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    startRelationalDatabaseResult?: shared.StartRelationalDatabaseResult;
    statusCode: number;
    unauthenticatedException?: any;
}
