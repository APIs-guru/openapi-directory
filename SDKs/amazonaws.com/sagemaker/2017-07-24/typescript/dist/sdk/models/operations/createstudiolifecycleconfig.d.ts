import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStudioLifecycleConfigXAmzTargetEnum {
    SageMakerCreateStudioLifecycleConfig = "SageMaker.CreateStudioLifecycleConfig"
}
export declare class CreateStudioLifecycleConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStudioLifecycleConfigXAmzTargetEnum;
}
export declare class CreateStudioLifecycleConfigRequest extends SpeakeasyBase {
    headers: CreateStudioLifecycleConfigHeaders;
    request: shared.CreateStudioLifecycleConfigRequest;
}
export declare class CreateStudioLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    createStudioLifecycleConfigResponse?: shared.CreateStudioLifecycleConfigResponse;
    resourceInUse?: any;
    statusCode: number;
}
