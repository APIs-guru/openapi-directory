import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateServiceTemplateVersionXAmzTargetEnum {
    AwsProton20200720CreateServiceTemplateVersion = "AwsProton20200720.CreateServiceTemplateVersion"
}
export declare class CreateServiceTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceTemplateVersionXAmzTargetEnum;
}
export declare class CreateServiceTemplateVersionRequest extends SpeakeasyBase {
    headers: CreateServiceTemplateVersionHeaders;
    request: shared.CreateServiceTemplateVersionInput;
}
export declare class CreateServiceTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createServiceTemplateVersionOutput?: shared.CreateServiceTemplateVersionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
