import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RebootRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128RebootRelationalDatabase = "Lightsail_20161128.RebootRelationalDatabase"
}
export declare class RebootRelationalDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootRelationalDatabaseXAmzTargetEnum;
}
export declare class RebootRelationalDatabaseRequest extends SpeakeasyBase {
    headers: RebootRelationalDatabaseHeaders;
    request: shared.RebootRelationalDatabaseRequest;
}
export declare class RebootRelationalDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    rebootRelationalDatabaseResult?: shared.RebootRelationalDatabaseResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
