import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteKeyPairXAmzTargetEnum {
    Lightsail20161128DeleteKeyPair = "Lightsail_20161128.DeleteKeyPair"
}
export declare class DeleteKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteKeyPairXAmzTargetEnum;
}
export declare class DeleteKeyPairRequest extends SpeakeasyBase {
    headers: DeleteKeyPairHeaders;
    request: shared.DeleteKeyPairRequest;
}
export declare class DeleteKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteKeyPairResult?: shared.DeleteKeyPairResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
