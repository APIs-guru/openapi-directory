import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SwbExternalServiceCreateInstanceAccessControlAttributeConfiguration = "SWBExternalService.CreateInstanceAccessControlAttributeConfiguration"
}
export declare class CreateInstanceAccessControlAttributeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class CreateInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    headers: CreateInstanceAccessControlAttributeConfigurationHeaders;
    request: shared.CreateInstanceAccessControlAttributeConfigurationRequest;
}
export declare class CreateInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createInstanceAccessControlAttributeConfigurationResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
