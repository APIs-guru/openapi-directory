import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseLogEventsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseLogEvents = "Lightsail_20161128.GetRelationalDatabaseLogEvents"
}
export declare class GetRelationalDatabaseLogEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseLogEventsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseLogEventsRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseLogEventsHeaders;
    request: shared.GetRelationalDatabaseLogEventsRequest;
}
export declare class GetRelationalDatabaseLogEventsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseLogEventsResult?: shared.GetRelationalDatabaseLogEventsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
