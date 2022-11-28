import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaBySearchQueryParams extends SpeakeasyBase {
    accuracy?: string;
    apiKey: string;
    bbox?: string;
    contacts?: string;
    contentType?: number;
    geoContext?: string;
    groupId?: string;
    hasGeo?: string;
    inGallery?: boolean;
    isCommons?: boolean;
    isGetty?: boolean;
    lat?: string;
    license?: string;
    lon?: string;
    machineTagMode?: string;
    machineTags?: string;
    maxTakenDate?: string;
    maxUploadDate?: string;
    media?: string;
    minTakenDate?: string;
    minUploadDate?: string;
    page?: number;
    perPage?: number;
    placeId?: string;
    privacyFilter?: number;
    radius?: number;
    radiusUnits?: string;
    safeSearch?: number;
    sort?: string;
    tags?: string;
    text?: string;
    userId?: string;
    woeId?: string;
}
export declare class GetMediaBySearch200ApplicationJson extends SpeakeasyBase {
    page?: number;
    pages?: number;
    perpage?: number;
    photos?: shared.Photo[];
    total?: number;
}
export declare class GetMediaBySearchRequest extends SpeakeasyBase {
    queryParams: GetMediaBySearchQueryParams;
}
export declare class GetMediaBySearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMediaBySearch200ApplicationJsonObject?: GetMediaBySearch200ApplicationJson;
}
