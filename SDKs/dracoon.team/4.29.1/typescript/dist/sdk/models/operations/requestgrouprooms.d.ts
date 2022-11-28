import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestGroupRoomsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class RequestGroupRoomsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
}
export declare class RequestGroupRoomsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestGroupRoomsRequest extends SpeakeasyBase {
    pathParams: RequestGroupRoomsPathParams;
    queryParams: RequestGroupRoomsQueryParams;
    headers: RequestGroupRoomsHeaders;
}
export declare class RequestGroupRoomsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roomTreeDataList?: shared.RoomTreeDataList;
    statusCode: number;
}
