import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515DeleteTagsForDomain = "Route53Domains_v20140515.DeleteTagsForDomain"
}
export declare class DeleteTagsForDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagsForDomainXAmzTargetEnum;
}
export declare class DeleteTagsForDomainRequest extends SpeakeasyBase {
    headers: DeleteTagsForDomainHeaders;
    request: shared.DeleteTagsForDomainRequest;
}
export declare class DeleteTagsForDomainResponse extends SpeakeasyBase {
    contentType: string;
    deleteTagsForDomainResponse?: Map<string, any>;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    unsupportedTld?: any;
}
