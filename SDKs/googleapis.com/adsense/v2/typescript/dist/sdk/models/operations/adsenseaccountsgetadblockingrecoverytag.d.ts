import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsGetAdBlockingRecoveryTagPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdsenseAccountsGetAdBlockingRecoveryTagQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsGetAdBlockingRecoveryTagSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1;
    option2?: AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2;
}
export declare class AdsenseAccountsGetAdBlockingRecoveryTagRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsGetAdBlockingRecoveryTagPathParams;
    queryParams: AdsenseAccountsGetAdBlockingRecoveryTagQueryParams;
    security: AdsenseAccountsGetAdBlockingRecoveryTagSecurity;
}
export declare class AdsenseAccountsGetAdBlockingRecoveryTagResponse extends SpeakeasyBase {
    adBlockingRecoveryTag?: shared.AdBlockingRecoveryTag;
    contentType: string;
    statusCode: number;
}
