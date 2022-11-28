import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsGetDatapointsCountPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare enum TagsGetDatapointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum TagsGetDatapointsCountTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class TagsGetDatapointsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    status?: TagsGetDatapointsCountStatusEnum;
    textSearch?: string;
    type?: TagsGetDatapointsCountTypeEnum;
}
export declare class TagsGetDatapointsCountRequest extends SpeakeasyBase {
    pathParams: TagsGetDatapointsCountPathParams;
    queryParams: TagsGetDatapointsCountQueryParams;
}
export declare class TagsGetDatapointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
