import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515UpdateTagsForDomain = "Route53Domains_v20140515.UpdateTagsForDomain"
}
export declare class UpdateTagsForDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTagsForDomainXAmzTargetEnum;
}
export declare class UpdateTagsForDomainRequest extends SpeakeasyBase {
    headers: UpdateTagsForDomainHeaders;
    request: shared.UpdateTagsForDomainRequest;
}
export declare class UpdateTagsForDomainResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    unsupportedTld?: any;
    updateTagsForDomainResponse?: Map<string, any>;
}
