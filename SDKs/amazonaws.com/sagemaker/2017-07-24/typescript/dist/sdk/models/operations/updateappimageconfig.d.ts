import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAppImageConfigXAmzTargetEnum {
    SageMakerUpdateAppImageConfig = "SageMaker.UpdateAppImageConfig"
}
export declare class UpdateAppImageConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAppImageConfigXAmzTargetEnum;
}
export declare class UpdateAppImageConfigRequest extends SpeakeasyBase {
    headers: UpdateAppImageConfigHeaders;
    request: shared.UpdateAppImageConfigRequest;
}
export declare class UpdateAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateAppImageConfigResponse?: shared.UpdateAppImageConfigResponse;
}
