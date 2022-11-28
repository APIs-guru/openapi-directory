import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabase = "Lightsail_20161128.GetRelationalDatabase"
}
export declare class GetRelationalDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseXAmzTargetEnum;
}
export declare class GetRelationalDatabaseRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseHeaders;
    request: shared.GetRelationalDatabaseRequest;
}
export declare class GetRelationalDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseResult?: shared.GetRelationalDatabaseResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
