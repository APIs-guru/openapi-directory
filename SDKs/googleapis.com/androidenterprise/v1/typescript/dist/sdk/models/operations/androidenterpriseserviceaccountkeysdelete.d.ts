import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseServiceaccountkeysDeletePathParams extends SpeakeasyBase {
    enterpriseId: string;
    keyId: string;
}
export declare class AndroidenterpriseServiceaccountkeysDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseServiceaccountkeysDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseServiceaccountkeysDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseServiceaccountkeysDeletePathParams;
    queryParams: AndroidenterpriseServiceaccountkeysDeleteQueryParams;
    security: AndroidenterpriseServiceaccountkeysDeleteSecurity;
}
export declare class AndroidenterpriseServiceaccountkeysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
