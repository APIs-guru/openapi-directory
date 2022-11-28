import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseMasterUserPassword = "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword"
}
export declare class GetRelationalDatabaseMasterUserPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum;
}
export declare class GetRelationalDatabaseMasterUserPasswordRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseMasterUserPasswordHeaders;
    request: shared.GetRelationalDatabaseMasterUserPasswordRequest;
}
export declare class GetRelationalDatabaseMasterUserPasswordResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseMasterUserPasswordResult?: shared.GetRelationalDatabaseMasterUserPasswordResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
