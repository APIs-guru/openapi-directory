import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseEventsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseEvents = "Lightsail_20161128.GetRelationalDatabaseEvents"
}
export declare class GetRelationalDatabaseEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseEventsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseEventsRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseEventsHeaders;
    request: shared.GetRelationalDatabaseEventsRequest;
}
export declare class GetRelationalDatabaseEventsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseEventsResult?: shared.GetRelationalDatabaseEventsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
