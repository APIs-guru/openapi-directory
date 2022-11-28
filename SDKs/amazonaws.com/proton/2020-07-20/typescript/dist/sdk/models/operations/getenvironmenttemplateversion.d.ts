import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720GetEnvironmentTemplateVersion = "AwsProton20200720.GetEnvironmentTemplateVersion"
}
export declare class GetEnvironmentTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class GetEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    headers: GetEnvironmentTemplateVersionHeaders;
    request: shared.GetEnvironmentTemplateVersionInput;
}
export declare class GetEnvironmentTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEnvironmentTemplateVersionOutput?: shared.GetEnvironmentTemplateVersionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
