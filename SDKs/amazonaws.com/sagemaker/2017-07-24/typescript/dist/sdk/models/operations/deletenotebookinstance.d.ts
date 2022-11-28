import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteNotebookInstanceXAmzTargetEnum {
    SageMakerDeleteNotebookInstance = "SageMaker.DeleteNotebookInstance"
}
export declare class DeleteNotebookInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNotebookInstanceXAmzTargetEnum;
}
export declare class DeleteNotebookInstanceRequest extends SpeakeasyBase {
    headers: DeleteNotebookInstanceHeaders;
    request: shared.DeleteNotebookInstanceInput;
}
export declare class DeleteNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
