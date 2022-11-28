import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainsInsertPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryDomainsInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryDomainsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainsInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainsInsertPathParams;
    queryParams: DirectoryDomainsInsertQueryParams;
    request?: shared.Domains;
    security: DirectoryDomainsInsertSecurity;
}
export declare class DirectoryDomainsInsertResponse extends SpeakeasyBase {
    contentType: string;
    domains?: shared.Domains;
    statusCode: number;
}
