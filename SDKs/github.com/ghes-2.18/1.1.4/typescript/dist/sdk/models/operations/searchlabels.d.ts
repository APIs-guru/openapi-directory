import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchLabelsSortEnum {
    Created = "created",
    Updated = "updated"
}
export declare class SearchLabelsQueryParams extends SpeakeasyBase {
    order?: shared.OrderEnum;
    q: string;
    repositoryId: number;
    sort?: SearchLabelsSortEnum;
}
export declare class SearchLabels200ApplicationJson extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.LabelSearchResultItem[];
    totalCount: number;
}
export declare class SearchLabelsRequest extends SpeakeasyBase {
    queryParams: SearchLabelsQueryParams;
}
export declare class SearchLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    searchLabels200ApplicationJsonObject?: SearchLabels200ApplicationJson;
    validationError?: shared.ValidationError;
}
