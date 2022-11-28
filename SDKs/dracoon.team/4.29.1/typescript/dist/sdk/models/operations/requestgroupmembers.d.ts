import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestGroupMembersPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class RequestGroupMembersQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
}
export declare class RequestGroupMembersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestGroupMembersRequest extends SpeakeasyBase {
    pathParams: RequestGroupMembersPathParams;
    queryParams: RequestGroupMembersQueryParams;
    headers: RequestGroupMembersHeaders;
}
export declare class RequestGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    groupUserList?: shared.GroupUserList;
    statusCode: number;
}
