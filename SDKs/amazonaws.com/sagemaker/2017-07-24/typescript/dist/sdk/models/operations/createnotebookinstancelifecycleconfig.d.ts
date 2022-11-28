import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerCreateNotebookInstanceLifecycleConfig = "SageMaker.CreateNotebookInstanceLifecycleConfig"
}
export declare class CreateNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class CreateNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    headers: CreateNotebookInstanceLifecycleConfigHeaders;
    request: shared.CreateNotebookInstanceLifecycleConfigInput;
}
export declare class CreateNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    createNotebookInstanceLifecycleConfigOutput?: shared.CreateNotebookInstanceLifecycleConfigOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
