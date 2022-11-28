import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentTemplateVersion = "AwsProton20200720.UpdateEnvironmentTemplateVersion"
}
export declare class UpdateEnvironmentTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class UpdateEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    headers: UpdateEnvironmentTemplateVersionHeaders;
    request: shared.UpdateEnvironmentTemplateVersionInput;
}
export declare class UpdateEnvironmentTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEnvironmentTemplateVersionOutput?: shared.UpdateEnvironmentTemplateVersionOutput;
    validationException?: any;
}
