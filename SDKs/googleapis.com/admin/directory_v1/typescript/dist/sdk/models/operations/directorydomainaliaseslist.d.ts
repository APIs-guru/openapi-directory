import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainAliasesListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryDomainAliasesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    parentDomainName?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryDomainAliasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainAliasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainAliasesListSecurity extends SpeakeasyBase {
    option1?: DirectoryDomainAliasesListSecurityOption1;
    option2?: DirectoryDomainAliasesListSecurityOption2;
}
export declare class DirectoryDomainAliasesListRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainAliasesListPathParams;
    queryParams: DirectoryDomainAliasesListQueryParams;
    security: DirectoryDomainAliasesListSecurity;
}
export declare class DirectoryDomainAliasesListResponse extends SpeakeasyBase {
    contentType: string;
    domainAliases?: shared.DomainAliases;
    statusCode: number;
}
