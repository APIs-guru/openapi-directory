import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteKnownHostKeysXAmzTargetEnum {
    Lightsail20161128DeleteKnownHostKeys = "Lightsail_20161128.DeleteKnownHostKeys"
}
export declare class DeleteKnownHostKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteKnownHostKeysXAmzTargetEnum;
}
export declare class DeleteKnownHostKeysRequest extends SpeakeasyBase {
    headers: DeleteKnownHostKeysHeaders;
    request: shared.DeleteKnownHostKeysRequest;
}
export declare class DeleteKnownHostKeysResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteKnownHostKeysResult?: shared.DeleteKnownHostKeysResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
