import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeVideosQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetUsersMeVideosSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeVideosRequest extends SpeakeasyBase {
    queryParams: GetUsersMeVideosQueryParams;
    security: GetUsersMeVideosSecurity;
}
export declare class GetUsersMeVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: any;
}
