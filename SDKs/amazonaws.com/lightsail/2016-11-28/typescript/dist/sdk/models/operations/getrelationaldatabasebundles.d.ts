import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseBundlesXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseBundles = "Lightsail_20161128.GetRelationalDatabaseBundles"
}
export declare class GetRelationalDatabaseBundlesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseBundlesXAmzTargetEnum;
}
export declare class GetRelationalDatabaseBundlesRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseBundlesHeaders;
    request: shared.GetRelationalDatabaseBundlesRequest;
}
export declare class GetRelationalDatabaseBundlesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseBundlesResult?: shared.GetRelationalDatabaseBundlesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
