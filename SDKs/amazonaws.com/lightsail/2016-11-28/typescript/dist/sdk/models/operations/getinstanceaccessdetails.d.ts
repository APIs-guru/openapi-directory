import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceAccessDetailsXAmzTargetEnum {
    Lightsail20161128GetInstanceAccessDetails = "Lightsail_20161128.GetInstanceAccessDetails"
}
export declare class GetInstanceAccessDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceAccessDetailsXAmzTargetEnum;
}
export declare class GetInstanceAccessDetailsRequest extends SpeakeasyBase {
    headers: GetInstanceAccessDetailsHeaders;
    request: shared.GetInstanceAccessDetailsRequest;
}
export declare class GetInstanceAccessDetailsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstanceAccessDetailsResult?: shared.GetInstanceAccessDetailsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
