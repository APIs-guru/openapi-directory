import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720DeleteEnvironmentTemplateVersion = "AwsProton20200720.DeleteEnvironmentTemplateVersion"
}
export declare class DeleteEnvironmentTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class DeleteEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    headers: DeleteEnvironmentTemplateVersionHeaders;
    request: shared.DeleteEnvironmentTemplateVersionInput;
}
export declare class DeleteEnvironmentTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteEnvironmentTemplateVersionOutput?: shared.DeleteEnvironmentTemplateVersionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
