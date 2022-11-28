import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryChromeosdevicesGetPathParams extends SpeakeasyBase {
    customerId: string;
    deviceId: string;
}
export declare enum DirectoryChromeosdevicesGetProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DirectoryChromeosdevicesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryChromeosdevicesGetProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryChromeosdevicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryChromeosdevicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryChromeosdevicesGetSecurity extends SpeakeasyBase {
    option1?: DirectoryChromeosdevicesGetSecurityOption1;
    option2?: DirectoryChromeosdevicesGetSecurityOption2;
}
export declare class DirectoryChromeosdevicesGetRequest extends SpeakeasyBase {
    pathParams: DirectoryChromeosdevicesGetPathParams;
    queryParams: DirectoryChromeosdevicesGetQueryParams;
    security: DirectoryChromeosdevicesGetSecurity;
}
export declare class DirectoryChromeosdevicesGetResponse extends SpeakeasyBase {
    chromeOsDevice?: shared.ChromeOsDevice;
    contentType: string;
    statusCode: number;
}
