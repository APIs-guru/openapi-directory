import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInstanceXAmzTargetEnum {
    Lightsail20161128DeleteInstance = "Lightsail_20161128.DeleteInstance"
}
export declare class DeleteInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInstanceXAmzTargetEnum;
}
export declare class DeleteInstanceRequest extends SpeakeasyBase {
    headers: DeleteInstanceHeaders;
    request: shared.DeleteInstanceRequest;
}
export declare class DeleteInstanceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteInstanceResult?: shared.DeleteInstanceResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
