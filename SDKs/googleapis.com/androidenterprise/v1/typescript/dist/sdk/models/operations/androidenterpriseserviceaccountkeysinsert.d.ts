import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseServiceaccountkeysInsertPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseServiceaccountkeysInsertQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseServiceaccountkeysInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseServiceaccountkeysInsertRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseServiceaccountkeysInsertPathParams;
    queryParams: AndroidenterpriseServiceaccountkeysInsertQueryParams;
    request?: shared.ServiceAccountKey;
    security: AndroidenterpriseServiceaccountkeysInsertSecurity;
}
export declare class AndroidenterpriseServiceaccountkeysInsertResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccountKey?: shared.ServiceAccountKey;
    statusCode: number;
}
