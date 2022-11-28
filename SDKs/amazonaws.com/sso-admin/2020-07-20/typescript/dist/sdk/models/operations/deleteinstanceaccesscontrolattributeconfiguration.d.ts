import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SwbExternalServiceDeleteInstanceAccessControlAttributeConfiguration = "SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration"
}
export declare class DeleteInstanceAccessControlAttributeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class DeleteInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    headers: DeleteInstanceAccessControlAttributeConfigurationHeaders;
    request: shared.DeleteInstanceAccessControlAttributeConfigurationRequest;
}
export declare class DeleteInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteInstanceAccessControlAttributeConfigurationResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
