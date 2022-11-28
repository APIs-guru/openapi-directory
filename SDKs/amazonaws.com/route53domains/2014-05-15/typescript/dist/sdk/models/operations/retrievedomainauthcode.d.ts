import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RetrieveDomainAuthCodeXAmzTargetEnum {
    Route53DomainsV20140515RetrieveDomainAuthCode = "Route53Domains_v20140515.RetrieveDomainAuthCode"
}
export declare class RetrieveDomainAuthCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetrieveDomainAuthCodeXAmzTargetEnum;
}
export declare class RetrieveDomainAuthCodeRequest extends SpeakeasyBase {
    headers: RetrieveDomainAuthCodeHeaders;
    request: shared.RetrieveDomainAuthCodeRequest;
}
export declare class RetrieveDomainAuthCodeResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    retrieveDomainAuthCodeResponse?: shared.RetrieveDomainAuthCodeResponse;
    statusCode: number;
    unsupportedTld?: any;
}
