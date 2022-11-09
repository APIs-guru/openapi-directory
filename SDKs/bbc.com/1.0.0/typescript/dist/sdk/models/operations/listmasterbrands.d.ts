import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListMasterbrandsMixinEnum {
    Images = "images"
}
export declare enum ListMasterbrandsSortEnum {
    Mid = "mid"
}
export declare enum ListMasterbrandsSortDirectionEnum {
    Ascending = "ascending"
}
export declare class ListMasterbrandsQueryParams extends SpeakeasyBase {
    mid?: string[];
    mixin?: ListMasterbrandsMixinEnum[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    q?: string;
    sort?: ListMasterbrandsSortEnum;
    sortDirection?: ListMasterbrandsSortDirectionEnum;
}
export declare class ListMasterbrandsRequest extends SpeakeasyBase {
    queryParams: ListMasterbrandsQueryParams;
}
export declare class ListMasterbrandsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
