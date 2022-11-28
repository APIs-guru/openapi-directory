import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDomainDetailXAmzTargetEnum {
    Route53DomainsV20140515GetDomainDetail = "Route53Domains_v20140515.GetDomainDetail"
}
export declare class GetDomainDetailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDomainDetailXAmzTargetEnum;
}
export declare class GetDomainDetailRequest extends SpeakeasyBase {
    headers: GetDomainDetailHeaders;
    request: shared.GetDomainDetailRequest;
}
export declare class GetDomainDetailResponse extends SpeakeasyBase {
    contentType: string;
    getDomainDetailResponse?: shared.GetDomainDetailResponse;
    invalidInput?: any;
    statusCode: number;
    unsupportedTld?: any;
}
