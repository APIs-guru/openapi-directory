import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeprecateDomainXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateDomain = "SimpleWorkflowService.DeprecateDomain"
}
export declare class DeprecateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateDomainXAmzTargetEnum;
}
export declare class DeprecateDomainRequest extends SpeakeasyBase {
    headers: DeprecateDomainHeaders;
    request: shared.DeprecateDomainInput;
}
export declare class DeprecateDomainResponse extends SpeakeasyBase {
    contentType: string;
    domainDeprecatedFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
