import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720GetEnvironmentTemplate = "AwsProton20200720.GetEnvironmentTemplate"
}
export declare class GetEnvironmentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnvironmentTemplateXAmzTargetEnum;
}
export declare class GetEnvironmentTemplateRequest extends SpeakeasyBase {
    headers: GetEnvironmentTemplateHeaders;
    request: shared.GetEnvironmentTemplateInput;
}
export declare class GetEnvironmentTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEnvironmentTemplateOutput?: shared.GetEnvironmentTemplateOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
