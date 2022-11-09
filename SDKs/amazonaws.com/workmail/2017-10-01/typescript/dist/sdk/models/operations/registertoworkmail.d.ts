import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RegisterToWorkMailXAmzTargetEnum {
    WorkMailServiceRegisterToWorkMail = "WorkMailService.RegisterToWorkMail"
}
export declare class RegisterToWorkMailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterToWorkMailXAmzTargetEnum;
}
export declare class RegisterToWorkMailRequest extends SpeakeasyBase {
    headers: RegisterToWorkMailHeaders;
    request: shared.RegisterToWorkMailRequest;
}
export declare class RegisterToWorkMailResponse extends SpeakeasyBase {
    contentType: string;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    emailAddressInUseException?: any;
    entityAlreadyRegisteredException?: any;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    mailDomainNotFoundException?: any;
    mailDomainStateException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    registerToWorkMailResponse?: Map<string, any>;
    statusCode: number;
}
