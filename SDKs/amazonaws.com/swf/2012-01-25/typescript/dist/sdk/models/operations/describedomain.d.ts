import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDomainXAmzTargetEnum {
    SimpleWorkflowServiceDescribeDomain = "SimpleWorkflowService.DescribeDomain"
}
export declare class DescribeDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDomainXAmzTargetEnum;
}
export declare class DescribeDomainRequest extends SpeakeasyBase {
    headers: DescribeDomainHeaders;
    request: shared.DescribeDomainInput;
}
export declare class DescribeDomainResponse extends SpeakeasyBase {
    contentType: string;
    domainDetail?: shared.DomainDetail;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
