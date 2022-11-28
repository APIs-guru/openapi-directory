import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabasesXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabases = "Lightsail_20161128.GetRelationalDatabases"
}
export declare class GetRelationalDatabasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabasesXAmzTargetEnum;
}
export declare class GetRelationalDatabasesRequest extends SpeakeasyBase {
    headers: GetRelationalDatabasesHeaders;
    request: shared.GetRelationalDatabasesRequest;
}
export declare class GetRelationalDatabasesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabasesResult?: shared.GetRelationalDatabasesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
