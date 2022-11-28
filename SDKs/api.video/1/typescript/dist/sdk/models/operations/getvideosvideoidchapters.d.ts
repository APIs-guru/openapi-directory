import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosVideoIdChaptersPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class GetVideosVideoIdChaptersQueryParams extends SpeakeasyBase {
    currentPage?: number;
    pageSize?: number;
}
export declare class GetVideosVideoIdChaptersSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetVideosVideoIdChaptersRequest extends SpeakeasyBase {
    pathParams: GetVideosVideoIdChaptersPathParams;
    queryParams: GetVideosVideoIdChaptersQueryParams;
    security: GetVideosVideoIdChaptersSecurity;
}
export declare class GetVideosVideoIdChaptersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chaptersListResponse?: shared.ChaptersListResponse;
    notFound?: shared.NotFound;
}
