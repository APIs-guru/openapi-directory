import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchTopicsQueryParams extends SpeakeasyBase {
    q: string;
}
export declare class SearchTopics200ApplicationJson extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.TopicSearchResultItem[];
    totalCount: number;
}
export declare class SearchTopics415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class SearchTopicsRequest extends SpeakeasyBase {
    queryParams: SearchTopicsQueryParams;
}
export declare class SearchTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchTopics200ApplicationJsonObject?: SearchTopics200ApplicationJson;
    searchTopics415ApplicationJsonObject?: SearchTopics415ApplicationJson;
}
