import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopNotebookInstanceXAmzTargetEnum {
    SageMakerStopNotebookInstance = "SageMaker.StopNotebookInstance"
}
export declare class StopNotebookInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopNotebookInstanceXAmzTargetEnum;
}
export declare class StopNotebookInstanceRequest extends SpeakeasyBase {
    headers: StopNotebookInstanceHeaders;
    request: shared.StopNotebookInstanceInput;
}
export declare class StopNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
