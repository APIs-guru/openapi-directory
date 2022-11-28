import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsPaymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdsenseAccountsPaymentsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsPaymentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsPaymentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsPaymentsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsPaymentsListSecurityOption1;
    option2?: AdsenseAccountsPaymentsListSecurityOption2;
}
export declare class AdsenseAccountsPaymentsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsPaymentsListPathParams;
    queryParams: AdsenseAccountsPaymentsListQueryParams;
    security: AdsenseAccountsPaymentsListSecurity;
}
export declare class AdsenseAccountsPaymentsListResponse extends SpeakeasyBase {
    contentType: string;
    listPaymentsResponse?: shared.ListPaymentsResponse;
    statusCode: number;
}
