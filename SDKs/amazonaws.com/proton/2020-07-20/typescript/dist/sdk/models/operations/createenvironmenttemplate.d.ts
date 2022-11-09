import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720CreateEnvironmentTemplate = "AwsProton20200720.CreateEnvironmentTemplate"
}
export declare class CreateEnvironmentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentTemplateXAmzTargetEnum;
}
export declare class CreateEnvironmentTemplateRequest extends SpeakeasyBase {
    headers: CreateEnvironmentTemplateHeaders;
    request: shared.CreateEnvironmentTemplateInput;
}
export declare class CreateEnvironmentTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createEnvironmentTemplateOutput?: shared.CreateEnvironmentTemplateOutput;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
