import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatasetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatasetsXAmzTargetEnum {
    AmazonPersonalizeListDatasets = "AmazonPersonalize.ListDatasets"
}
export declare class ListDatasetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetsXAmzTargetEnum;
}
export declare class ListDatasetsRequest extends SpeakeasyBase {
    queryParams: ListDatasetsQueryParams;
    headers: ListDatasetsHeaders;
    request: shared.ListDatasetsRequest;
}
export declare class ListDatasetsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listDatasetsResponse?: shared.ListDatasetsResponse;
    statusCode: number;
}
