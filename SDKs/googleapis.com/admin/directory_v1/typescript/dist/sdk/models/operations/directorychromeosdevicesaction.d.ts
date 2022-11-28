import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryChromeosdevicesActionPathParams extends SpeakeasyBase {
    customerId: string;
    resourceId: string;
}
export declare class DirectoryChromeosdevicesActionQueryParams extends SpeakeasyBase {
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
export declare class DirectoryChromeosdevicesActionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryChromeosdevicesActionRequest extends SpeakeasyBase {
    pathParams: DirectoryChromeosdevicesActionPathParams;
    queryParams: DirectoryChromeosdevicesActionQueryParams;
    request?: shared.ChromeOsDeviceAction;
    security: DirectoryChromeosdevicesActionSecurity;
}
export declare class DirectoryChromeosdevicesActionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
