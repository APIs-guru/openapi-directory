import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBlueprintsXAmzTargetEnum {
    Lightsail20161128GetBlueprints = "Lightsail_20161128.GetBlueprints"
}
export declare class GetBlueprintsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlueprintsXAmzTargetEnum;
}
export declare class GetBlueprintsRequest extends SpeakeasyBase {
    headers: GetBlueprintsHeaders;
    request: shared.GetBlueprintsRequest;
}
export declare class GetBlueprintsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getBlueprintsResult?: shared.GetBlueprintsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
