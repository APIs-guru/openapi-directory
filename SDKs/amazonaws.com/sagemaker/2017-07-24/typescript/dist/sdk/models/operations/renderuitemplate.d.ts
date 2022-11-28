import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RenderUiTemplateXAmzTargetEnum {
    SageMakerRenderUiTemplate = "SageMaker.RenderUiTemplate"
}
export declare class RenderUiTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenderUiTemplateXAmzTargetEnum;
}
export declare class RenderUiTemplateRequest extends SpeakeasyBase {
    headers: RenderUiTemplateHeaders;
    request: shared.RenderUiTemplateRequest;
}
export declare class RenderUiTemplateResponse extends SpeakeasyBase {
    contentType: string;
    renderUiTemplateResponse?: shared.RenderUiTemplateResponse;
    resourceNotFound?: any;
    statusCode: number;
}
