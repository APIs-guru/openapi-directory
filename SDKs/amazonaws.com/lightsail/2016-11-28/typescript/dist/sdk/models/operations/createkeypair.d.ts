import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateKeyPairXAmzTargetEnum {
    Lightsail20161128CreateKeyPair = "Lightsail_20161128.CreateKeyPair"
}
export declare class CreateKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateKeyPairXAmzTargetEnum;
}
export declare class CreateKeyPairRequest extends SpeakeasyBase {
    headers: CreateKeyPairHeaders;
    request: shared.CreateKeyPairRequest;
}
export declare class CreateKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createKeyPairResult?: shared.CreateKeyPairResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
