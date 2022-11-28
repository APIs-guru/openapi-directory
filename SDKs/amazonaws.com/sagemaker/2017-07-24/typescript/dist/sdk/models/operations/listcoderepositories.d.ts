import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCodeRepositoriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCodeRepositoriesXAmzTargetEnum {
    SageMakerListCodeRepositories = "SageMaker.ListCodeRepositories"
}
export declare class ListCodeRepositoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCodeRepositoriesXAmzTargetEnum;
}
export declare class ListCodeRepositoriesRequest extends SpeakeasyBase {
    queryParams: ListCodeRepositoriesQueryParams;
    headers: ListCodeRepositoriesHeaders;
    request: shared.ListCodeRepositoriesInput;
}
export declare class ListCodeRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    listCodeRepositoriesOutput?: shared.ListCodeRepositoriesOutput;
    statusCode: number;
}
