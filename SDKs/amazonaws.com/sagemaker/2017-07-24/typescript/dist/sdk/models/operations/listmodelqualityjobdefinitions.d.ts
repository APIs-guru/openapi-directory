import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListModelQualityJobDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListModelQualityJobDefinitionsXAmzTargetEnum {
    SageMakerListModelQualityJobDefinitions = "SageMaker.ListModelQualityJobDefinitions"
}
export declare class ListModelQualityJobDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListModelQualityJobDefinitionsXAmzTargetEnum;
}
export declare class ListModelQualityJobDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListModelQualityJobDefinitionsQueryParams;
    headers: ListModelQualityJobDefinitionsHeaders;
    request: shared.ListModelQualityJobDefinitionsRequest;
}
export declare class ListModelQualityJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listModelQualityJobDefinitionsResponse?: shared.ListModelQualityJobDefinitionsResponse;
    statusCode: number;
}
