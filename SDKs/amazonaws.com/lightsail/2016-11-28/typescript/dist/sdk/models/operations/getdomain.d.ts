import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDomainXAmzTargetEnum {
    Lightsail20161128GetDomain = "Lightsail_20161128.GetDomain"
}
export declare class GetDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDomainXAmzTargetEnum;
}
export declare class GetDomainRequest extends SpeakeasyBase {
    headers: GetDomainHeaders;
    request: shared.GetDomainRequest;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getDomainResult?: shared.GetDomainResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
