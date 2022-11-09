import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListGroupsEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}
export declare enum ListGroupsGroupTypeEnum {
    Collection = "collection",
    Franchise = "franchise",
    Gallery = "gallery",
    Season = "season"
}
export declare enum ListGroupsMixinEnum {
    AlternateImages = "alternate_images",
    GroupFor = "group_for",
    Images = "images",
    RelatedLinks = "related_links"
}
export declare enum ListGroupsSortEnum {
    Pid = "pid"
}
export declare enum ListGroupsSortDirectionEnum {
    Descending = "descending"
}
export declare class ListGroupsQueryParams extends SpeakeasyBase {
    embargoed?: ListGroupsEmbargoedEnum;
    forDescendantsOf?: string;
    forProgramme?: string;
    group?: string;
    groupType?: ListGroupsGroupTypeEnum[];
    member?: string;
    mixin?: ListGroupsMixinEnum[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    pid?: string[];
    q?: string;
    sort?: ListGroupsSortEnum;
    sortDirection?: ListGroupsSortDirectionEnum;
}
export declare class ListGroupsRequest extends SpeakeasyBase {
    queryParams: ListGroupsQueryParams;
}
export declare class ListGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
