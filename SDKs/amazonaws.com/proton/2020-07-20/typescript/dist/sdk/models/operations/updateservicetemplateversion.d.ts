import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServiceTemplateVersionXAmzTargetEnum {
    AwsProton20200720UpdateServiceTemplateVersion = "AwsProton20200720.UpdateServiceTemplateVersion"
}
export declare class UpdateServiceTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceTemplateVersionXAmzTargetEnum;
}
export declare class UpdateServiceTemplateVersionRequest extends SpeakeasyBase {
    headers: UpdateServiceTemplateVersionHeaders;
    request: shared.UpdateServiceTemplateVersionInput;
}
export declare class UpdateServiceTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateServiceTemplateVersionOutput?: shared.UpdateServiceTemplateVersionOutput;
    validationException?: any;
}
