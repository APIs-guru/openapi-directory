import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128UpdateRelationalDatabase = "Lightsail_20161128.UpdateRelationalDatabase"
}
export declare class UpdateRelationalDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRelationalDatabaseXAmzTargetEnum;
}
export declare class UpdateRelationalDatabaseRequest extends SpeakeasyBase {
    headers: UpdateRelationalDatabaseHeaders;
    request: shared.UpdateRelationalDatabaseRequest;
}
export declare class UpdateRelationalDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateRelationalDatabaseResult?: shared.UpdateRelationalDatabaseResult;
}
