import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterDomainXAmzTargetEnum {
    SimpleWorkflowServiceRegisterDomain = "SimpleWorkflowService.RegisterDomain"
}
export declare class RegisterDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDomainXAmzTargetEnum;
}
export declare class RegisterDomainRequest extends SpeakeasyBase {
    headers: RegisterDomainHeaders;
    request: shared.RegisterDomainInput;
}
export declare class RegisterDomainResponse extends SpeakeasyBase {
    contentType: string;
    domainAlreadyExistsFault?: any;
    limitExceededFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    tooManyTagsFault?: any;
}
