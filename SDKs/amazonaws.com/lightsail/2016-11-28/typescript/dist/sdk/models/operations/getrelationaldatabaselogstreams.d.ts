import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseLogStreamsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseLogStreams = "Lightsail_20161128.GetRelationalDatabaseLogStreams"
}
export declare class GetRelationalDatabaseLogStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseLogStreamsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseLogStreamsRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseLogStreamsHeaders;
    request: shared.GetRelationalDatabaseLogStreamsRequest;
}
export declare class GetRelationalDatabaseLogStreamsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseLogStreamsResult?: shared.GetRelationalDatabaseLogStreamsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
