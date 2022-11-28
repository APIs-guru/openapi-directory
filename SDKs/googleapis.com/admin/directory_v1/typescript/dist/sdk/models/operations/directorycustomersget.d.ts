import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryCustomersGetPathParams extends SpeakeasyBase {
    customerKey: string;
}
export declare class DirectoryCustomersGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryCustomersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryCustomersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryCustomersGetSecurity extends SpeakeasyBase {
    option1?: DirectoryCustomersGetSecurityOption1;
    option2?: DirectoryCustomersGetSecurityOption2;
}
export declare class DirectoryCustomersGetRequest extends SpeakeasyBase {
    pathParams: DirectoryCustomersGetPathParams;
    queryParams: DirectoryCustomersGetQueryParams;
    security: DirectoryCustomersGetSecurity;
}
export declare class DirectoryCustomersGetResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    statusCode: number;
}
