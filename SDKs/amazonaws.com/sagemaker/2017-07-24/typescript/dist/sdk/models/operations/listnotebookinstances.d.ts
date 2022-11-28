import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNotebookInstancesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListNotebookInstancesXAmzTargetEnum {
    SageMakerListNotebookInstances = "SageMaker.ListNotebookInstances"
}
export declare class ListNotebookInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNotebookInstancesXAmzTargetEnum;
}
export declare class ListNotebookInstancesRequest extends SpeakeasyBase {
    queryParams: ListNotebookInstancesQueryParams;
    headers: ListNotebookInstancesHeaders;
    request: shared.ListNotebookInstancesInput;
}
export declare class ListNotebookInstancesResponse extends SpeakeasyBase {
    contentType: string;
    listNotebookInstancesOutput?: shared.ListNotebookInstancesOutput;
    statusCode: number;
}
