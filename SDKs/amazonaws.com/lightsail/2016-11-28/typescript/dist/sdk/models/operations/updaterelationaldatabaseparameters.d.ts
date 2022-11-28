import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRelationalDatabaseParametersXAmzTargetEnum {
    Lightsail20161128UpdateRelationalDatabaseParameters = "Lightsail_20161128.UpdateRelationalDatabaseParameters"
}
export declare class UpdateRelationalDatabaseParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRelationalDatabaseParametersXAmzTargetEnum;
}
export declare class UpdateRelationalDatabaseParametersRequest extends SpeakeasyBase {
    headers: UpdateRelationalDatabaseParametersHeaders;
    request: shared.UpdateRelationalDatabaseParametersRequest;
}
export declare class UpdateRelationalDatabaseParametersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateRelationalDatabaseParametersResult?: shared.UpdateRelationalDatabaseParametersResult;
}
