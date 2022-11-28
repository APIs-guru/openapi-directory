import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UndeprecateDomainXAmzTargetEnum {
    SimpleWorkflowServiceUndeprecateDomain = "SimpleWorkflowService.UndeprecateDomain"
}
export declare class UndeprecateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeprecateDomainXAmzTargetEnum;
}
export declare class UndeprecateDomainRequest extends SpeakeasyBase {
    headers: UndeprecateDomainHeaders;
    request: shared.UndeprecateDomainInput;
}
export declare class UndeprecateDomainResponse extends SpeakeasyBase {
    contentType: string;
    domainAlreadyExistsFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
