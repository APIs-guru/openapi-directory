import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetStaticIpsXAmzTargetEnum {
    Lightsail20161128GetStaticIps = "Lightsail_20161128.GetStaticIps"
}
export declare class GetStaticIpsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetStaticIpsXAmzTargetEnum;
}
export declare class GetStaticIpsRequest extends SpeakeasyBase {
    headers: GetStaticIpsHeaders;
    request: shared.GetStaticIpsRequest;
}
export declare class GetStaticIpsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getStaticIpsResult?: shared.GetStaticIpsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
