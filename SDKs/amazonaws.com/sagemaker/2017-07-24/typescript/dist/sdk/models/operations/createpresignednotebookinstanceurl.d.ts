import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePresignedNotebookInstanceUrlXAmzTargetEnum {
    SageMakerCreatePresignedNotebookInstanceUrl = "SageMaker.CreatePresignedNotebookInstanceUrl"
}
export declare class CreatePresignedNotebookInstanceUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePresignedNotebookInstanceUrlXAmzTargetEnum;
}
export declare class CreatePresignedNotebookInstanceUrlRequest extends SpeakeasyBase {
    headers: CreatePresignedNotebookInstanceUrlHeaders;
    request: shared.CreatePresignedNotebookInstanceUrlInput;
}
export declare class CreatePresignedNotebookInstanceUrlResponse extends SpeakeasyBase {
    contentType: string;
    createPresignedNotebookInstanceUrlOutput?: shared.CreatePresignedNotebookInstanceUrlOutput;
    statusCode: number;
}
