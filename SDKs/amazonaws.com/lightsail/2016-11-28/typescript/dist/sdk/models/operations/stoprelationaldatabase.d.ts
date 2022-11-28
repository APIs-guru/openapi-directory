import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128StopRelationalDatabase = "Lightsail_20161128.StopRelationalDatabase"
}
export declare class StopRelationalDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRelationalDatabaseXAmzTargetEnum;
}
export declare class StopRelationalDatabaseRequest extends SpeakeasyBase {
    headers: StopRelationalDatabaseHeaders;
    request: shared.StopRelationalDatabaseRequest;
}
export declare class StopRelationalDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    stopRelationalDatabaseResult?: shared.StopRelationalDatabaseResult;
    unauthenticatedException?: any;
}
