import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListImagesEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}
export declare enum ListImagesImageTypeEnum {
    Standard = "standard",
    Podcast = "podcast",
    Store = "store",
    Portrait = "portrait",
    Letterbox = "letterbox"
}
export declare enum ListImagesSortEnum {
    GroupPosition = "group_position",
    Pid = "pid"
}
export declare enum ListImagesSortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class ListImagesQueryParams extends SpeakeasyBase {
    embargoed?: ListImagesEmbargoedEnum;
    group?: string;
    imageType?: ListImagesImageTypeEnum[];
    isAlternateImageFor?: string;
    isImageFor?: string;
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    pid?: string[];
    q?: string;
    sort?: ListImagesSortEnum;
    sortDirection?: ListImagesSortDirectionEnum;
}
export declare class ListImagesRequest extends SpeakeasyBase {
    queryParams: ListImagesQueryParams;
}
export declare class ListImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
