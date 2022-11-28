import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListModelBiasJobDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListModelBiasJobDefinitionsXAmzTargetEnum {
    SageMakerListModelBiasJobDefinitions = "SageMaker.ListModelBiasJobDefinitions"
}
export declare class ListModelBiasJobDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListModelBiasJobDefinitionsXAmzTargetEnum;
}
export declare class ListModelBiasJobDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListModelBiasJobDefinitionsQueryParams;
    headers: ListModelBiasJobDefinitionsHeaders;
    request: shared.ListModelBiasJobDefinitionsRequest;
}
export declare class ListModelBiasJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listModelBiasJobDefinitionsResponse?: shared.ListModelBiasJobDefinitionsResponse;
    statusCode: number;
}
