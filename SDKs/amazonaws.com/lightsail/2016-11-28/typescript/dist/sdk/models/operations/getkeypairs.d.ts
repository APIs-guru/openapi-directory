import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetKeyPairsXAmzTargetEnum {
    Lightsail20161128GetKeyPairs = "Lightsail_20161128.GetKeyPairs"
}
export declare class GetKeyPairsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetKeyPairsXAmzTargetEnum;
}
export declare class GetKeyPairsRequest extends SpeakeasyBase {
    headers: GetKeyPairsHeaders;
    request: shared.GetKeyPairsRequest;
}
export declare class GetKeyPairsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getKeyPairsResult?: shared.GetKeyPairsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
