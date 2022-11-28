import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePrimaryEmailAddressXAmzTargetEnum {
    WorkMailServiceUpdatePrimaryEmailAddress = "WorkMailService.UpdatePrimaryEmailAddress"
}
export declare class UpdatePrimaryEmailAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePrimaryEmailAddressXAmzTargetEnum;
}
export declare class UpdatePrimaryEmailAddressRequest extends SpeakeasyBase {
    headers: UpdatePrimaryEmailAddressHeaders;
    request: shared.UpdatePrimaryEmailAddressRequest;
}
export declare class UpdatePrimaryEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    emailAddressInUseException?: any;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    mailDomainNotFoundException?: any;
    mailDomainStateException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    updatePrimaryEmailAddressResponse?: Map<string, any>;
}
