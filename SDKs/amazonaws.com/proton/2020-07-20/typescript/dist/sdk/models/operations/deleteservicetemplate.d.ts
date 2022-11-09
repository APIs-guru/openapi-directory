import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteServiceTemplateXAmzTargetEnum {
    AwsProton20200720DeleteServiceTemplate = "AwsProton20200720.DeleteServiceTemplate"
}
export declare class DeleteServiceTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceTemplateXAmzTargetEnum;
}
export declare class DeleteServiceTemplateRequest extends SpeakeasyBase {
    headers: DeleteServiceTemplateHeaders;
    request: shared.DeleteServiceTemplateInput;
}
export declare class DeleteServiceTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteServiceTemplateOutput?: shared.DeleteServiceTemplateOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
