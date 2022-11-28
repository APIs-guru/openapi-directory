import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosVideoIdCaptionsPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class GetVideosVideoIdCaptionsQueryParams extends SpeakeasyBase {
    currentPage?: number;
    pageSize?: number;
}
export declare class GetVideosVideoIdCaptionsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetVideosVideoIdCaptionsRequest extends SpeakeasyBase {
    pathParams: GetVideosVideoIdCaptionsPathParams;
    queryParams: GetVideosVideoIdCaptionsQueryParams;
    security: GetVideosVideoIdCaptionsSecurity;
}
export declare class GetVideosVideoIdCaptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    captionsListResponse?: shared.CaptionsListResponse;
    notFound?: shared.NotFound;
}
