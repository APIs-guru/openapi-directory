import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainAliasesGetPathParams extends SpeakeasyBase {
    customer: string;
    domainAliasName: string;
}
export declare class DirectoryDomainAliasesGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryDomainAliasesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainAliasesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainAliasesGetSecurity extends SpeakeasyBase {
    option1?: DirectoryDomainAliasesGetSecurityOption1;
    option2?: DirectoryDomainAliasesGetSecurityOption2;
}
export declare class DirectoryDomainAliasesGetRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainAliasesGetPathParams;
    queryParams: DirectoryDomainAliasesGetQueryParams;
    security: DirectoryDomainAliasesGetSecurity;
}
export declare class DirectoryDomainAliasesGetResponse extends SpeakeasyBase {
    contentType: string;
    domainAlias?: shared.DomainAlias;
    statusCode: number;
}
