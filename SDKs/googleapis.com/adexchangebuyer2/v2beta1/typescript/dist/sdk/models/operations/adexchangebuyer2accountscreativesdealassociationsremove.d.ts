import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams extends SpeakeasyBase {
    accountId: string;
    creativeId: string;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams;
    queryParams: Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams;
    request?: shared.RemoveDealAssociationRequest;
    security: Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
