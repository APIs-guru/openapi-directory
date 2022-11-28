import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerUpdateNotebookInstanceLifecycleConfig = "SageMaker.UpdateNotebookInstanceLifecycleConfig"
}
export declare class UpdateNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class UpdateNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    headers: UpdateNotebookInstanceLifecycleConfigHeaders;
    request: shared.UpdateNotebookInstanceLifecycleConfigInput;
}
export declare class UpdateNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
    updateNotebookInstanceLifecycleConfigOutput?: Map<string, any>;
}
