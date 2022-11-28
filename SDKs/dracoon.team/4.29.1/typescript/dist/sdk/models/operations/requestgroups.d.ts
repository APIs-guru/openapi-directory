import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestGroupsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestGroupsRequest extends SpeakeasyBase {
    queryParams: RequestGroupsQueryParams;
    headers: RequestGroupsHeaders;
}
export declare class RequestGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    groupList?: shared.GroupList;
    statusCode: number;
}
