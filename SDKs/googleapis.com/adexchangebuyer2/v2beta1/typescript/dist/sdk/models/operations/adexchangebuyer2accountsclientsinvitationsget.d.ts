import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsInvitationsGetPathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
    invitationId: string;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsGetRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsInvitationsGetPathParams;
    queryParams: Adexchangebuyer2AccountsClientsInvitationsGetQueryParams;
    security: Adexchangebuyer2AccountsClientsInvitationsGetSecurity;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsGetResponse extends SpeakeasyBase {
    clientUserInvitation?: shared.ClientUserInvitation;
    contentType: string;
    statusCode: number;
}
