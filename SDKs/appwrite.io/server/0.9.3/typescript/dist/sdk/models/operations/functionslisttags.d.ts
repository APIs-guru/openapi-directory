import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FunctionsListTagsPathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsListTagsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class FunctionsListTagsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsListTagsRequest extends SpeakeasyBase {
    pathParams: FunctionsListTagsPathParams;
    queryParams: FunctionsListTagsQueryParams;
    security: FunctionsListTagsSecurity;
}
export declare class FunctionsListTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagList?: shared.TagList;
}
