import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetStaticIpXAmzTargetEnum {
    Lightsail20161128GetStaticIp = "Lightsail_20161128.GetStaticIp"
}
export declare class GetStaticIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetStaticIpXAmzTargetEnum;
}
export declare class GetStaticIpRequest extends SpeakeasyBase {
    headers: GetStaticIpHeaders;
    request: shared.GetStaticIpRequest;
}
export declare class GetStaticIpResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getStaticIpResult?: shared.GetStaticIpResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
