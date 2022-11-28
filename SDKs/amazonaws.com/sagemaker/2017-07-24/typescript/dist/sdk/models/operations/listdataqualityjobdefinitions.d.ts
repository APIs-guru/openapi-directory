import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDataQualityJobDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDataQualityJobDefinitionsXAmzTargetEnum {
    SageMakerListDataQualityJobDefinitions = "SageMaker.ListDataQualityJobDefinitions"
}
export declare class ListDataQualityJobDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDataQualityJobDefinitionsXAmzTargetEnum;
}
export declare class ListDataQualityJobDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListDataQualityJobDefinitionsQueryParams;
    headers: ListDataQualityJobDefinitionsHeaders;
    request: shared.ListDataQualityJobDefinitionsRequest;
}
export declare class ListDataQualityJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listDataQualityJobDefinitionsResponse?: shared.ListDataQualityJobDefinitionsResponse;
    statusCode: number;
}
