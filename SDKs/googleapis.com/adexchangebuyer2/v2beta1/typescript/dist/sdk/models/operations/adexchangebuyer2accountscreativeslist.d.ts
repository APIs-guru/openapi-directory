import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsCreativesListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class Adexchangebuyer2AccountsCreativesListQueryParams extends SpeakeasyBase {
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
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsCreativesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsCreativesListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsCreativesListPathParams;
    queryParams: Adexchangebuyer2AccountsCreativesListQueryParams;
    security: Adexchangebuyer2AccountsCreativesListSecurity;
}
export declare class Adexchangebuyer2AccountsCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    listCreativesResponse?: shared.ListCreativesResponse;
    statusCode: number;
}
