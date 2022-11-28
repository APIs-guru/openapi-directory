import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerDeleteNotebookInstanceLifecycleConfig = "SageMaker.DeleteNotebookInstanceLifecycleConfig"
}
export declare class DeleteNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class DeleteNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    headers: DeleteNotebookInstanceLifecycleConfigHeaders;
    request: shared.DeleteNotebookInstanceLifecycleConfigInput;
}
export declare class DeleteNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
