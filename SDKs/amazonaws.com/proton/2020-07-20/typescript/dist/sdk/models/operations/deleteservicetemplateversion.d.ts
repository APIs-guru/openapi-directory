import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteServiceTemplateVersionXAmzTargetEnum {
    AwsProton20200720DeleteServiceTemplateVersion = "AwsProton20200720.DeleteServiceTemplateVersion"
}
export declare class DeleteServiceTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceTemplateVersionXAmzTargetEnum;
}
export declare class DeleteServiceTemplateVersionRequest extends SpeakeasyBase {
    headers: DeleteServiceTemplateVersionHeaders;
    request: shared.DeleteServiceTemplateVersionInput;
}
export declare class DeleteServiceTemplateVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteServiceTemplateVersionOutput?: shared.DeleteServiceTemplateVersionOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
