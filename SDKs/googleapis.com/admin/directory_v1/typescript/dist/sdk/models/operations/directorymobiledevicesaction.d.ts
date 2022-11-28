import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMobiledevicesActionPathParams extends SpeakeasyBase {
    customerId: string;
    resourceId: string;
}
export declare class DirectoryMobiledevicesActionQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMobiledevicesActionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesActionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesActionSecurity extends SpeakeasyBase {
    option1?: DirectoryMobiledevicesActionSecurityOption1;
    option2?: DirectoryMobiledevicesActionSecurityOption2;
}
export declare class DirectoryMobiledevicesActionRequest extends SpeakeasyBase {
    pathParams: DirectoryMobiledevicesActionPathParams;
    queryParams: DirectoryMobiledevicesActionQueryParams;
    request?: shared.MobileDeviceAction;
    security: DirectoryMobiledevicesActionSecurity;
}
export declare class DirectoryMobiledevicesActionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
