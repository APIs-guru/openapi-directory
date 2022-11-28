import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseParametersXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseParameters = "Lightsail_20161128.GetRelationalDatabaseParameters"
}
export declare class GetRelationalDatabaseParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseParametersXAmzTargetEnum;
}
export declare class GetRelationalDatabaseParametersRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseParametersHeaders;
    request: shared.GetRelationalDatabaseParametersRequest;
}
export declare class GetRelationalDatabaseParametersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseParametersResult?: shared.GetRelationalDatabaseParametersResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
