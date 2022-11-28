import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAppImageConfigXAmzTargetEnum {
    SageMakerCreateAppImageConfig = "SageMaker.CreateAppImageConfig"
}
export declare class CreateAppImageConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppImageConfigXAmzTargetEnum;
}
export declare class CreateAppImageConfigRequest extends SpeakeasyBase {
    headers: CreateAppImageConfigHeaders;
    request: shared.CreateAppImageConfigRequest;
}
export declare class CreateAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    createAppImageConfigResponse?: shared.CreateAppImageConfigResponse;
    resourceInUse?: any;
    statusCode: number;
}
