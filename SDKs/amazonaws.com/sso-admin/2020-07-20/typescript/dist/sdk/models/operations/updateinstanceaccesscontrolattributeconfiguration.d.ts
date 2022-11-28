import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SwbExternalServiceUpdateInstanceAccessControlAttributeConfiguration = "SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration"
}
export declare class UpdateInstanceAccessControlAttributeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class UpdateInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    headers: UpdateInstanceAccessControlAttributeConfigurationHeaders;
    request: shared.UpdateInstanceAccessControlAttributeConfigurationRequest;
}
export declare class UpdateInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateInstanceAccessControlAttributeConfigurationResponse?: Map<string, any>;
    validationException?: any;
}
