import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
}
export declare class Adexchangebuyer2AccountsClientsUpdateQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsClientsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsUpdateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsUpdatePathParams;
    queryParams: Adexchangebuyer2AccountsClientsUpdateQueryParams;
    request?: shared.Client;
    security: Adexchangebuyer2AccountsClientsUpdateSecurity;
}
export declare class Adexchangebuyer2AccountsClientsUpdateResponse extends SpeakeasyBase {
    client?: shared.Client;
    contentType: string;
    statusCode: number;
}
