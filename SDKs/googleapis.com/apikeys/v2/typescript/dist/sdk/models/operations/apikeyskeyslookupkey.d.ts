import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApikeysKeysLookupKeyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    keyString?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApikeysKeysLookupKeySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysKeysLookupKeySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysKeysLookupKeySecurity extends SpeakeasyBase {
    option1?: ApikeysKeysLookupKeySecurityOption1;
    option2?: ApikeysKeysLookupKeySecurityOption2;
}
export declare class ApikeysKeysLookupKeyRequest extends SpeakeasyBase {
    queryParams: ApikeysKeysLookupKeyQueryParams;
    security: ApikeysKeysLookupKeySecurity;
}
export declare class ApikeysKeysLookupKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    v2LookupKeyResponse?: shared.V2LookupKeyResponse;
}
