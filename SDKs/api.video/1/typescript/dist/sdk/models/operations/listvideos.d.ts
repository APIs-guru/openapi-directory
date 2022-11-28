import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVideosQueryParams extends SpeakeasyBase {
    currentPage?: number;
    description?: string;
    liveStreamId?: string;
    metadata?: string[];
    pageSize?: number;
    sortBy?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
}
export declare class ListVideosSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ListVideosRequest extends SpeakeasyBase {
    queryParams: ListVideosQueryParams;
    security: ListVideosSecurity;
}
export declare class ListVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    videosListResponse?: shared.VideosListResponse;
}
