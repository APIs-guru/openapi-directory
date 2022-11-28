import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3VideosIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3VideosIdQueryParams extends SpeakeasyBase {
    fields?: shared.VideoDetailFieldValuesEnum[];
}
export declare class GetV3VideosIdHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3VideosIdRequest extends SpeakeasyBase {
    pathParams: GetV3VideosIdPathParams;
    queryParams: GetV3VideosIdQueryParams;
    headers: GetV3VideosIdHeaders;
}
export declare class GetV3VideosIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
