import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateNotebookInstanceXAmzTargetEnum {
    SageMakerCreateNotebookInstance = "SageMaker.CreateNotebookInstance"
}
export declare class CreateNotebookInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNotebookInstanceXAmzTargetEnum;
}
export declare class CreateNotebookInstanceRequest extends SpeakeasyBase {
    headers: CreateNotebookInstanceHeaders;
    request: shared.CreateNotebookInstanceInput;
}
export declare class CreateNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    createNotebookInstanceOutput?: shared.CreateNotebookInstanceOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
