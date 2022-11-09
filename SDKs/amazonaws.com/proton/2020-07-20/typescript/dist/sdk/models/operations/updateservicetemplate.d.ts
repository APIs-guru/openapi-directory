import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServiceTemplateXAmzTargetEnum {
    AwsProton20200720UpdateServiceTemplate = "AwsProton20200720.UpdateServiceTemplate"
}
export declare class UpdateServiceTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceTemplateXAmzTargetEnum;
}
export declare class UpdateServiceTemplateRequest extends SpeakeasyBase {
    headers: UpdateServiceTemplateHeaders;
    request: shared.UpdateServiceTemplateInput;
}
export declare class UpdateServiceTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateServiceTemplateOutput?: shared.UpdateServiceTemplateOutput;
    validationException?: any;
}
