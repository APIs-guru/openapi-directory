import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeHistoryVideosQueryParams extends SpeakeasyBase {
    count?: number;
    search?: string;
    start?: number;
}
export declare class GetUsersMeHistoryVideosSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeHistoryVideosRequest extends SpeakeasyBase {
    queryParams: GetUsersMeHistoryVideosQueryParams;
    security: GetUsersMeHistoryVideosSecurity;
}
export declare class GetUsersMeHistoryVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: any;
}
