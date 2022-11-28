import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDomainsXAmzTargetEnum {
    Lightsail20161128GetDomains = "Lightsail_20161128.GetDomains"
}
export declare class GetDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDomainsXAmzTargetEnum;
}
export declare class GetDomainsRequest extends SpeakeasyBase {
    headers: GetDomainsHeaders;
    request: shared.GetDomainsRequest;
}
export declare class GetDomainsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getDomainsResult?: shared.GetDomainsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
