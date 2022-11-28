import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsClientsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class Adexchangebuyer2AccountsClientsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    partnerClientId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsClientsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsClientsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsClientsListPathParams;
    queryParams: Adexchangebuyer2AccountsClientsListQueryParams;
    security: Adexchangebuyer2AccountsClientsListSecurity;
}
export declare class Adexchangebuyer2AccountsClientsListResponse extends SpeakeasyBase {
    contentType: string;
    listClientsResponse?: shared.ListClientsResponse;
    statusCode: number;
}
