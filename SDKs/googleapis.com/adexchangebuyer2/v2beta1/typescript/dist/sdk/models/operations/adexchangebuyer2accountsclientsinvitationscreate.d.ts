import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsInvitationsCreatePathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsClientsInvitationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsCreateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsInvitationsCreatePathParams;
    queryParams: Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams;
    request?: shared.ClientUserInvitation;
    security: Adexchangebuyer2AccountsClientsInvitationsCreateSecurity;
}
export declare class Adexchangebuyer2AccountsClientsInvitationsCreateResponse extends SpeakeasyBase {
    clientUserInvitation?: shared.ClientUserInvitation;
    contentType: string;
    statusCode: number;
}
