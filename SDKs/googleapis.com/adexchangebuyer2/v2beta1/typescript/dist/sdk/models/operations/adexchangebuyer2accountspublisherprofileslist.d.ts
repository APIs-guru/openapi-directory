import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsPublisherProfilesListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class Adexchangebuyer2AccountsPublisherProfilesListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsPublisherProfilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsPublisherProfilesListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsPublisherProfilesListPathParams;
    queryParams: Adexchangebuyer2AccountsPublisherProfilesListQueryParams;
    security: Adexchangebuyer2AccountsPublisherProfilesListSecurity;
}
export declare class Adexchangebuyer2AccountsPublisherProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    listPublisherProfilesResponse?: shared.ListPublisherProfilesResponse;
    statusCode: number;
}
