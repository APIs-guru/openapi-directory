import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateServiceTemplateXAmzTargetEnum {
    AwsProton20200720CreateServiceTemplate = "AwsProton20200720.CreateServiceTemplate"
}
export declare class CreateServiceTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceTemplateXAmzTargetEnum;
}
export declare class CreateServiceTemplateRequest extends SpeakeasyBase {
    headers: CreateServiceTemplateHeaders;
    request: shared.CreateServiceTemplateInput;
}
export declare class CreateServiceTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createServiceTemplateOutput?: shared.CreateServiceTemplateOutput;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
