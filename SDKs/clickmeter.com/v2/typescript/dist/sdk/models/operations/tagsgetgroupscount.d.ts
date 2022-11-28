import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsGetGroupsCountPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare enum TagsGetGroupsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class TagsGetGroupsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    status?: TagsGetGroupsCountStatusEnum;
    textSearch?: string;
}
export declare class TagsGetGroupsCountRequest extends SpeakeasyBase {
    pathParams: TagsGetGroupsCountPathParams;
    queryParams: TagsGetGroupsCountQueryParams;
}
export declare class TagsGetGroupsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
