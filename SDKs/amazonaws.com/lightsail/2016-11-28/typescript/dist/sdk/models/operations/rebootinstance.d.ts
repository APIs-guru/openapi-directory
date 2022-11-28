import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RebootInstanceXAmzTargetEnum {
    Lightsail20161128RebootInstance = "Lightsail_20161128.RebootInstance"
}
export declare class RebootInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootInstanceXAmzTargetEnum;
}
export declare class RebootInstanceRequest extends SpeakeasyBase {
    headers: RebootInstanceHeaders;
    request: shared.RebootInstanceRequest;
}
export declare class RebootInstanceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    rebootInstanceResult?: shared.RebootInstanceResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
