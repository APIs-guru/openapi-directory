import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsDomainMappingsGetPathParams extends SpeakeasyBase {
    appsId: string;
    domainMappingsId: string;
}
export declare class AppengineAppsDomainMappingsGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsDomainMappingsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsDomainMappingsGetSecurityOption1;
    option2?: AppengineAppsDomainMappingsGetSecurityOption2;
    option3?: AppengineAppsDomainMappingsGetSecurityOption3;
}
export declare class AppengineAppsDomainMappingsGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsDomainMappingsGetPathParams;
    queryParams: AppengineAppsDomainMappingsGetQueryParams;
    security: AppengineAppsDomainMappingsGetSecurity;
}
export declare class AppengineAppsDomainMappingsGetResponse extends SpeakeasyBase {
    contentType: string;
    domainMapping?: shared.DomainMapping;
    statusCode: number;
}
