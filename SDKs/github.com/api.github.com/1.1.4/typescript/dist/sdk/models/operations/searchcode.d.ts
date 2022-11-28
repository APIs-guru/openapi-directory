import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchCodeSortEnum {
    Indexed = "indexed"
}
export declare class SearchCodeQueryParams extends SpeakeasyBase {
    order?: shared.OrderEnum;
    page?: number;
    perPage?: number;
    q: string;
    sort?: SearchCodeSortEnum;
}
export declare class SearchCode200ApplicationJson extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.CodeSearchResultItem[];
    totalCount: number;
}
export declare class SearchCode503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SearchCodeRequest extends SpeakeasyBase {
    queryParams: SearchCodeQueryParams;
}
export declare class SearchCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    searchCode200ApplicationJsonObject?: SearchCode200ApplicationJson;
    searchCode503ApplicationJsonObject?: SearchCode503ApplicationJson;
    validationError?: shared.ValidationError;
}
