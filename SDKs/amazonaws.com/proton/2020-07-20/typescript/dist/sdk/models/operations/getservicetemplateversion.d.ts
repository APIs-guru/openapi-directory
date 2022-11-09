import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetServiceTemplateVersionXAmzTargetEnum {
    AwsProton20200720GetServiceTemplateVersion = "AwsProton20200720.GetServiceTemplateVersion"
}
export declare class GetServiceTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceTemplateVersionXAmzTargetEnum;
}
export declare class GetServiceTemplateVersionRequest extends SpeakeasyBase {
    headers: GetServiceTemplateVersionHeaders;
    request: shared.GetServiceTemplateVersionInput;
}
export declare class GetServiceTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getServiceTemplateVersionOutput?: shared.GetServiceTemplateVersionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
