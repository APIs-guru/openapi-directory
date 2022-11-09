import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListItemsItemTypeEnum {
    Chapter = "chapter",
    Highlight = "highlight",
    Music = "music",
    Speech = "speech",
    Other = "other"
}
export declare enum ListItemsMixinEnum {
    Contributions = "contributions",
    Images = "images",
    Offset = "offset",
    PlayEvent = "play_event"
}
export declare enum ListItemsSortEnum {
    Pid = "pid"
}
export declare enum ListItemsSortDirectionEnum {
    Descending = "descending"
}
export declare class ListItemsQueryParams extends SpeakeasyBase {
    authority?: string;
    id?: string[];
    idType?: string;
    itemType?: ListItemsItemTypeEnum[];
    mixin?: ListItemsMixinEnum[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    people?: string;
    pid?: string[];
    programme?: string;
    q?: string;
    segmentEvent?: string;
    sort?: ListItemsSortEnum;
    sortDirection?: ListItemsSortDirectionEnum;
}
export declare class ListItemsRequest extends SpeakeasyBase {
    queryParams: ListItemsQueryParams;
}
export declare class ListItemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
