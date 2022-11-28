import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStudioLifecycleConfigXAmzTargetEnum {
    SageMakerDeleteStudioLifecycleConfig = "SageMaker.DeleteStudioLifecycleConfig"
}
export declare class DeleteStudioLifecycleConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStudioLifecycleConfigXAmzTargetEnum;
}
export declare class DeleteStudioLifecycleConfigRequest extends SpeakeasyBase {
    headers: DeleteStudioLifecycleConfigHeaders;
    request: shared.DeleteStudioLifecycleConfigRequest;
}
export declare class DeleteStudioLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    resourceNotFound?: any;
    statusCode: number;
}
