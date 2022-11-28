import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseServiceaccountkeysListPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseServiceaccountkeysListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseServiceaccountkeysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseServiceaccountkeysListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseServiceaccountkeysListPathParams;
    queryParams: AndroidenterpriseServiceaccountkeysListQueryParams;
    security: AndroidenterpriseServiceaccountkeysListSecurity;
}
export declare class AndroidenterpriseServiceaccountkeysListResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccountKeysListResponse?: shared.ServiceAccountKeysListResponse;
    statusCode: number;
}
