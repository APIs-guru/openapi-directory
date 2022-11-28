import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsCreativesUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    creativeId: string;
}
export declare class Adexchangebuyer2AccountsCreativesUpdateQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsCreativesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsCreativesUpdateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsCreativesUpdatePathParams;
    queryParams: Adexchangebuyer2AccountsCreativesUpdateQueryParams;
    request?: shared.Creative;
    security: Adexchangebuyer2AccountsCreativesUpdateSecurity;
}
export declare class Adexchangebuyer2AccountsCreativesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
