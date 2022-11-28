import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPullrequestsSelectedUserPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare enum GetPullrequestsSelectedUserStateEnum {
    Merged = "MERGED",
    Superseded = "SUPERSEDED",
    Open = "OPEN",
    Declined = "DECLINED"
}
export declare class GetPullrequestsSelectedUserQueryParams extends SpeakeasyBase {
    state?: GetPullrequestsSelectedUserStateEnum;
}
export declare class GetPullrequestsSelectedUserSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetPullrequestsSelectedUserRequest extends SpeakeasyBase {
    pathParams: GetPullrequestsSelectedUserPathParams;
    queryParams: GetPullrequestsSelectedUserQueryParams;
    security: GetPullrequestsSelectedUserSecurity;
}
export declare class GetPullrequestsSelectedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedPullrequests?: shared.PaginatedPullrequests;
}
