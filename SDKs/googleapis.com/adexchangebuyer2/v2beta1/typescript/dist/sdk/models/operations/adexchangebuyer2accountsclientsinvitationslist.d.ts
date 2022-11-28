import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsInvitationsListPathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsClientsInvitationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsInvitationsListPathParams;
    queryParams: Adexchangebuyer2AccountsClientsInvitationsListQueryParams;
    security: Adexchangebuyer2AccountsClientsInvitationsListSecurity;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    listClientUserInvitationsResponse?: shared.ListClientUserInvitationsResponse;
    statusCode: number;
}
