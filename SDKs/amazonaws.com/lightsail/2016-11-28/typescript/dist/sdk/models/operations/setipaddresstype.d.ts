import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetIpAddressTypeXAmzTargetEnum {
    Lightsail20161128SetIpAddressType = "Lightsail_20161128.SetIpAddressType"
}
export declare class SetIpAddressTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetIpAddressTypeXAmzTargetEnum;
}
export declare class SetIpAddressTypeRequest extends SpeakeasyBase {
    headers: SetIpAddressTypeHeaders;
    request: shared.SetIpAddressTypeRequest;
}
export declare class SetIpAddressTypeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    setIpAddressTypeResult?: shared.SetIpAddressTypeResult;
    statusCode: number;
    unauthenticatedException?: any;
}
