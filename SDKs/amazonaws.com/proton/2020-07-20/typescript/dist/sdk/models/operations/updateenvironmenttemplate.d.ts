import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentTemplate = "AwsProton20200720.UpdateEnvironmentTemplate"
}
export declare class UpdateEnvironmentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentTemplateXAmzTargetEnum;
}
export declare class UpdateEnvironmentTemplateRequest extends SpeakeasyBase {
    headers: UpdateEnvironmentTemplateHeaders;
    request: shared.UpdateEnvironmentTemplateInput;
}
export declare class UpdateEnvironmentTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEnvironmentTemplateOutput?: shared.UpdateEnvironmentTemplateOutput;
    validationException?: any;
}
