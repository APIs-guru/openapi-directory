import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLiveStreamsSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetLiveStreamsQueryParams extends SpeakeasyBase {
    currentPage?: number;
    name?: string;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: GetLiveStreamsSortOrderEnum;
    streamKey?: string;
}
export declare class GetLiveStreamsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetLiveStreamsRequest extends SpeakeasyBase {
    queryParams: GetLiveStreamsQueryParams;
    security: GetLiveStreamsSecurity;
}
export declare class GetLiveStreamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    liveStreamListResponse?: shared.LiveStreamListResponse;
}
