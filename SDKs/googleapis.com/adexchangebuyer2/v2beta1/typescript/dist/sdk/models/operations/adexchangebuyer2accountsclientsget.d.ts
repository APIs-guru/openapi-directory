import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsGetPathParams extends SpeakeasyBase {
    accountId: string;
    clientAccountId: string;
}
export declare class Adexchangebuyer2AccountsClientsGetQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsClientsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsGetRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsGetPathParams;
    queryParams: Adexchangebuyer2AccountsClientsGetQueryParams;
    security: Adexchangebuyer2AccountsClientsGetSecurity;
}
export declare class Adexchangebuyer2AccountsClientsGetResponse extends SpeakeasyBase {
    client?: shared.Client;
    contentType: string;
    statusCode: number;
}
