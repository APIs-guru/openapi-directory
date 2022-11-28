import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720DeleteEnvironmentTemplate = "AwsProton20200720.DeleteEnvironmentTemplate"
}
export declare class DeleteEnvironmentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentTemplateXAmzTargetEnum;
}
export declare class DeleteEnvironmentTemplateRequest extends SpeakeasyBase {
    headers: DeleteEnvironmentTemplateHeaders;
    request: shared.DeleteEnvironmentTemplateInput;
}
export declare class DeleteEnvironmentTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteEnvironmentTemplateOutput?: shared.DeleteEnvironmentTemplateOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
