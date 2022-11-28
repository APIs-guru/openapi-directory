import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseBlueprintsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseBlueprints = "Lightsail_20161128.GetRelationalDatabaseBlueprints"
}
export declare class GetRelationalDatabaseBlueprintsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseBlueprintsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseBlueprintsRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseBlueprintsHeaders;
    request: shared.GetRelationalDatabaseBlueprintsRequest;
}
export declare class GetRelationalDatabaseBlueprintsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseBlueprintsResult?: shared.GetRelationalDatabaseBlueprintsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
