import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMobiledevicesGetPathParams extends SpeakeasyBase {
    customerId: string;
    resourceId: string;
}
export declare enum DirectoryMobiledevicesGetProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DirectoryMobiledevicesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryMobiledevicesGetProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryMobiledevicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesGetSecurity extends SpeakeasyBase {
    option1?: DirectoryMobiledevicesGetSecurityOption1;
    option2?: DirectoryMobiledevicesGetSecurityOption2;
    option3?: DirectoryMobiledevicesGetSecurityOption3;
}
export declare class DirectoryMobiledevicesGetRequest extends SpeakeasyBase {
    pathParams: DirectoryMobiledevicesGetPathParams;
    queryParams: DirectoryMobiledevicesGetQueryParams;
    security: DirectoryMobiledevicesGetSecurity;
}
export declare class DirectoryMobiledevicesGetResponse extends SpeakeasyBase {
    contentType: string;
    mobileDevice?: shared.MobileDevice;
    statusCode: number;
}
