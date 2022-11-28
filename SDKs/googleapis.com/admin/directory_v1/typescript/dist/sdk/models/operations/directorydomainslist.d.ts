import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainsListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryDomainsListQueryParams extends SpeakeasyBase {
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
export declare class DirectoryDomainsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainsListSecurity extends SpeakeasyBase {
    option1?: DirectoryDomainsListSecurityOption1;
    option2?: DirectoryDomainsListSecurityOption2;
}
export declare class DirectoryDomainsListRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainsListPathParams;
    queryParams: DirectoryDomainsListQueryParams;
    security: DirectoryDomainsListSecurity;
}
export declare class DirectoryDomainsListResponse extends SpeakeasyBase {
    contentType: string;
    domains2?: shared.Domains2;
    statusCode: number;
}
