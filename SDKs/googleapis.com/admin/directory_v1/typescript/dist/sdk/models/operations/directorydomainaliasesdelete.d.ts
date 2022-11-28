import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryDomainAliasesDeletePathParams extends SpeakeasyBase {
    customer: string;
    domainAliasName: string;
}
export declare class DirectoryDomainAliasesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryDomainAliasesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryDomainAliasesDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryDomainAliasesDeletePathParams;
    queryParams: DirectoryDomainAliasesDeleteQueryParams;
    security: DirectoryDomainAliasesDeleteSecurity;
}
export declare class DirectoryDomainAliasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
