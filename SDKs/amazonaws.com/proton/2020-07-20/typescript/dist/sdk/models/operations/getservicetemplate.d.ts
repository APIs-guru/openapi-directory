import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetServiceTemplateXAmzTargetEnum {
    AwsProton20200720GetServiceTemplate = "AwsProton20200720.GetServiceTemplate"
}
export declare class GetServiceTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceTemplateXAmzTargetEnum;
}
export declare class GetServiceTemplateRequest extends SpeakeasyBase {
    headers: GetServiceTemplateHeaders;
    request: shared.GetServiceTemplateInput;
}
export declare class GetServiceTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getServiceTemplateOutput?: shared.GetServiceTemplateOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
