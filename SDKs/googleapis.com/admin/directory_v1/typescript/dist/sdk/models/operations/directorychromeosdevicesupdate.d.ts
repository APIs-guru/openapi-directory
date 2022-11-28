import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryChromeosdevicesUpdatePathParams extends SpeakeasyBase {
    customerId: string;
    deviceId: string;
}
export declare enum DirectoryChromeosdevicesUpdateProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DirectoryChromeosdevicesUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryChromeosdevicesUpdateProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryChromeosdevicesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryChromeosdevicesUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryChromeosdevicesUpdatePathParams;
    queryParams: DirectoryChromeosdevicesUpdateQueryParams;
    request?: shared.ChromeOsDevice;
    security: DirectoryChromeosdevicesUpdateSecurity;
}
export declare class DirectoryChromeosdevicesUpdateResponse extends SpeakeasyBase {
    chromeOsDevice?: shared.ChromeOsDevice;
    contentType: string;
    statusCode: number;
}
