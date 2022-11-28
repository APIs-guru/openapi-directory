import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class Adexchangebuyer2AccountsClientsCreateQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsClientsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsCreateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsCreatePathParams;
    queryParams: Adexchangebuyer2AccountsClientsCreateQueryParams;
    request?: shared.Client;
    security: Adexchangebuyer2AccountsClientsCreateSecurity;
}
export declare class Adexchangebuyer2AccountsClientsCreateResponse extends SpeakeasyBase {
    client?: shared.Client;
    contentType: string;
    statusCode: number;
}
