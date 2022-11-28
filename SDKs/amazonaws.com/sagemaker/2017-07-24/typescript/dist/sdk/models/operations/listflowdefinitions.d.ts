import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFlowDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFlowDefinitionsXAmzTargetEnum {
    SageMakerListFlowDefinitions = "SageMaker.ListFlowDefinitions"
}
export declare class ListFlowDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFlowDefinitionsXAmzTargetEnum;
}
export declare class ListFlowDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListFlowDefinitionsQueryParams;
    headers: ListFlowDefinitionsHeaders;
    request: shared.ListFlowDefinitionsRequest;
}
export declare class ListFlowDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listFlowDefinitionsResponse?: shared.ListFlowDefinitionsResponse;
    statusCode: number;
}
