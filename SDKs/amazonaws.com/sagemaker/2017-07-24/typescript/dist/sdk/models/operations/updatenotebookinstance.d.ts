import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateNotebookInstanceXAmzTargetEnum {
    SageMakerUpdateNotebookInstance = "SageMaker.UpdateNotebookInstance"
}
export declare class UpdateNotebookInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotebookInstanceXAmzTargetEnum;
}
export declare class UpdateNotebookInstanceRequest extends SpeakeasyBase {
    headers: UpdateNotebookInstanceHeaders;
    request: shared.UpdateNotebookInstanceInput;
}
export declare class UpdateNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
    updateNotebookInstanceOutput?: Map<string, any>;
}
