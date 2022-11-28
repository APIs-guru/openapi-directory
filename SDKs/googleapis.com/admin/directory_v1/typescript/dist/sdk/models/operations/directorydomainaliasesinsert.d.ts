import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainAliasesInsertPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryDomainAliasesInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryDomainAliasesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainAliasesInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainAliasesInsertPathParams;
    queryParams: DirectoryDomainAliasesInsertQueryParams;
    request?: shared.DomainAlias;
    security: DirectoryDomainAliasesInsertSecurity;
}
export declare class DirectoryDomainAliasesInsertResponse extends SpeakeasyBase {
    contentType: string;
    domainAlias?: shared.DomainAlias;
    statusCode: number;
}
