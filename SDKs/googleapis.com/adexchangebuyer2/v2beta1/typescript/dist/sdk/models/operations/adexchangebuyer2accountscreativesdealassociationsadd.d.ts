import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams extends SpeakeasyBase {
    accountId: string;
    creativeId: string;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams;
    queryParams: Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams;
    request?: shared.AddDealAssociationRequest;
    security: Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
