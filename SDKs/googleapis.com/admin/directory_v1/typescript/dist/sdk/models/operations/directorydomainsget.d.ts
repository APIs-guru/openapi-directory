import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainsGetPathParams extends SpeakeasyBase {
    customer: string;
    domainName: string;
}
export declare class DirectoryDomainsGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryDomainsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainsGetSecurity extends SpeakeasyBase {
    option1?: DirectoryDomainsGetSecurityOption1;
    option2?: DirectoryDomainsGetSecurityOption2;
}
export declare class DirectoryDomainsGetRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainsGetPathParams;
    queryParams: DirectoryDomainsGetQueryParams;
    security: DirectoryDomainsGetSecurity;
}
export declare class DirectoryDomainsGetResponse extends SpeakeasyBase {
    contentType: string;
    domains?: shared.Domains;
    statusCode: number;
}
