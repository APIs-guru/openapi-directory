import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720CreateEnvironmentTemplateVersion = "AwsProton20200720.CreateEnvironmentTemplateVersion"
}
export declare class CreateEnvironmentTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class CreateEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    headers: CreateEnvironmentTemplateVersionHeaders;
    request: shared.CreateEnvironmentTemplateVersionInput;
}
export declare class CreateEnvironmentTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createEnvironmentTemplateVersionOutput?: shared.CreateEnvironmentTemplateVersionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
