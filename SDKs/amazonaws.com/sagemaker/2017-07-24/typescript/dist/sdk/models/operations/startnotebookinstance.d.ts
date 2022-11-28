import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartNotebookInstanceXAmzTargetEnum {
    SageMakerStartNotebookInstance = "SageMaker.StartNotebookInstance"
}
export declare class StartNotebookInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartNotebookInstanceXAmzTargetEnum;
}
export declare class StartNotebookInstanceRequest extends SpeakeasyBase {
    headers: StartNotebookInstanceHeaders;
    request: shared.StartNotebookInstanceInput;
}
export declare class StartNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
}
