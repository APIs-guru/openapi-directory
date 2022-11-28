import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListModelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListModelsXAmzTargetEnum {
    SageMakerListModels = "SageMaker.ListModels"
}
export declare class ListModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListModelsXAmzTargetEnum;
}
export declare class ListModelsRequest extends SpeakeasyBase {
    queryParams: ListModelsQueryParams;
    headers: ListModelsHeaders;
    request: shared.ListModelsInput;
}
export declare class ListModelsResponse extends SpeakeasyBase {
    contentType: string;
    listModelsOutput?: shared.ListModelsOutput;
    statusCode: number;
}
