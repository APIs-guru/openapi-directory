import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNotebookInstanceLifecycleConfigsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListNotebookInstanceLifecycleConfigsXAmzTargetEnum {
    SageMakerListNotebookInstanceLifecycleConfigs = "SageMaker.ListNotebookInstanceLifecycleConfigs"
}
export declare class ListNotebookInstanceLifecycleConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNotebookInstanceLifecycleConfigsXAmzTargetEnum;
}
export declare class ListNotebookInstanceLifecycleConfigsRequest extends SpeakeasyBase {
    queryParams: ListNotebookInstanceLifecycleConfigsQueryParams;
    headers: ListNotebookInstanceLifecycleConfigsHeaders;
    request: shared.ListNotebookInstanceLifecycleConfigsInput;
}
export declare class ListNotebookInstanceLifecycleConfigsResponse extends SpeakeasyBase {
    contentType: string;
    listNotebookInstanceLifecycleConfigsOutput?: shared.ListNotebookInstanceLifecycleConfigsOutput;
    statusCode: number;
}
