import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListModelExplainabilityJobDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListModelExplainabilityJobDefinitionsXAmzTargetEnum {
    SageMakerListModelExplainabilityJobDefinitions = "SageMaker.ListModelExplainabilityJobDefinitions"
}
export declare class ListModelExplainabilityJobDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListModelExplainabilityJobDefinitionsXAmzTargetEnum;
}
export declare class ListModelExplainabilityJobDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListModelExplainabilityJobDefinitionsQueryParams;
    headers: ListModelExplainabilityJobDefinitionsHeaders;
    request: shared.ListModelExplainabilityJobDefinitionsRequest;
}
export declare class ListModelExplainabilityJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listModelExplainabilityJobDefinitionsResponse?: shared.ListModelExplainabilityJobDefinitionsResponse;
    statusCode: number;
}
