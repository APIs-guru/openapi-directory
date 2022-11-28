import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminCustomerDevicesChromeosCommandsGetPathParams extends SpeakeasyBase {
    commandId: string;
    customerId: string;
    deviceId: string;
}
export declare class AdminCustomerDevicesChromeosCommandsGetQueryParams extends SpeakeasyBase {
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
export declare class AdminCustomerDevicesChromeosCommandsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomerDevicesChromeosCommandsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdminCustomerDevicesChromeosCommandsGetSecurity extends SpeakeasyBase {
    option1?: AdminCustomerDevicesChromeosCommandsGetSecurityOption1;
    option2?: AdminCustomerDevicesChromeosCommandsGetSecurityOption2;
}
export declare class AdminCustomerDevicesChromeosCommandsGetRequest extends SpeakeasyBase {
    pathParams: AdminCustomerDevicesChromeosCommandsGetPathParams;
    queryParams: AdminCustomerDevicesChromeosCommandsGetQueryParams;
    security: AdminCustomerDevicesChromeosCommandsGetSecurity;
}
export declare class AdminCustomerDevicesChromeosCommandsGetResponse extends SpeakeasyBase {
    contentType: string;
    directoryChromeosdevicesCommand?: shared.DirectoryChromeosdevicesCommand;
    statusCode: number;
}
