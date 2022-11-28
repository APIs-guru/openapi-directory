import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetKeyPairXAmzTargetEnum {
    Lightsail20161128GetKeyPair = "Lightsail_20161128.GetKeyPair"
}
export declare class GetKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetKeyPairXAmzTargetEnum;
}
export declare class GetKeyPairRequest extends SpeakeasyBase {
    headers: GetKeyPairHeaders;
    request: shared.GetKeyPairRequest;
}
export declare class GetKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getKeyPairResult?: shared.GetKeyPairResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
