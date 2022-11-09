import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3VideosQueryParams extends SpeakeasyBase {
    fields?: shared.VideoDetailFieldValuesEnum[];
    ids?: string[];
}
export declare class GetV3VideosHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3VideosRequest extends SpeakeasyBase {
    queryParams: GetV3VideosQueryParams;
    headers: GetV3VideosHeaders;
}
export declare class GetV3VideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
