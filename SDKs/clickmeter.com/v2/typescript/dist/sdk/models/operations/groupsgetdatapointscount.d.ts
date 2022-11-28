import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetDatapointsCountPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GroupsGetDatapointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum GroupsGetDatapointsCountTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class GroupsGetDatapointsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    onlyFavorites?: boolean;
    status?: GroupsGetDatapointsCountStatusEnum;
    tags?: string;
    textSearch?: string;
    type?: GroupsGetDatapointsCountTypeEnum;
}
export declare class GroupsGetDatapointsCountRequest extends SpeakeasyBase {
    pathParams: GroupsGetDatapointsCountPathParams;
    queryParams: GroupsGetDatapointsCountQueryParams;
}
export declare class GroupsGetDatapointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
