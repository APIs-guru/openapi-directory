import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainsDeletePathParams extends SpeakeasyBase {
    customer: string;
    domainName: string;
}
export declare class DirectoryDomainsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryDomainsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainsDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainsDeletePathParams;
    queryParams: DirectoryDomainsDeleteQueryParams;
    security: DirectoryDomainsDeleteSecurity;
}
export declare class DirectoryDomainsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
