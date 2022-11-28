import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsListPathParams extends SpeakeasyBase {
    accountId: string;
    creativeId: string;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsCreativesDealAssociationsListPathParams;
    queryParams: Adexchangebuyer2AccountsCreativesDealAssociationsListQueryParams;
    security: Adexchangebuyer2AccountsCreativesDealAssociationsListSecurity;
}
export declare class Adexchangebuyer2AccountsCreativesDealAssociationsListResponse extends SpeakeasyBase {
    contentType: string;
    listDealAssociationsResponse?: shared.ListDealAssociationsResponse;
    statusCode: number;
}
