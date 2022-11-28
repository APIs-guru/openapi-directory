import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherUsersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidpublisherUsersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherUsersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherUsersListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherUsersListPathParams;
    queryParams: AndroidpublisherUsersListQueryParams;
    security: AndroidpublisherUsersListSecurity;
}
export declare class AndroidpublisherUsersListResponse extends SpeakeasyBase {
    contentType: string;
    listUsersResponse?: shared.ListUsersResponse;
    statusCode: number;
}
