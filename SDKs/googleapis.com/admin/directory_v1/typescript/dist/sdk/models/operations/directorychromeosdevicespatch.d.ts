import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryChromeosdevicesPatchPathParams extends SpeakeasyBase {
    customerId: string;
    deviceId: string;
}
export declare enum DirectoryChromeosdevicesPatchProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DirectoryChromeosdevicesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryChromeosdevicesPatchProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryChromeosdevicesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryChromeosdevicesPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryChromeosdevicesPatchPathParams;
    queryParams: DirectoryChromeosdevicesPatchQueryParams;
    request?: shared.ChromeOsDevice;
    security: DirectoryChromeosdevicesPatchSecurity;
}
export declare class DirectoryChromeosdevicesPatchResponse extends SpeakeasyBase {
    chromeOsDevice?: shared.ChromeOsDevice;
    contentType: string;
    statusCode: number;
}
