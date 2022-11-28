import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaByPersonIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    contentType?: number;
    maxTakenDate?: number;
    maxUploadDate?: number;
    minTakenDate?: number;
    minUploadDate?: number;
    page?: number;
    perPage?: number;
    privacyFilter?: number;
    safeSearch?: number;
    userId: string;
}
export declare class GetMediaByPersonId200ApplicationJson extends SpeakeasyBase {
    page?: number;
    pages?: number;
    perpage?: number;
    photos?: shared.Photo[];
    total?: number;
}
export declare class GetMediaByPersonIdRequest extends SpeakeasyBase {
    queryParams: GetMediaByPersonIdQueryParams;
}
export declare class GetMediaByPersonIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMediaByPersonId200ApplicationJsonObject?: GetMediaByPersonId200ApplicationJson;
}
