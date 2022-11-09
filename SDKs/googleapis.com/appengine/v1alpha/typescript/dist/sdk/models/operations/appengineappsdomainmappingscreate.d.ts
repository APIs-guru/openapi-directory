import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsDomainMappingsCreatePathParams extends SpeakeasyBase {
    appsId: string;
}
export declare enum AppengineAppsDomainMappingsCreateOverrideStrategyEnum {
    UnspecifiedDomainOverrideStrategy = "UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY",
    Strict = "STRICT",
    Override = "OVERRIDE"
}
export declare class AppengineAppsDomainMappingsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    noManagedCertificate?: boolean;
    oauthToken?: string;
    overrideStrategy?: AppengineAppsDomainMappingsCreateOverrideStrategyEnum;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsDomainMappingsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsCreateRequest extends SpeakeasyBase {
    pathParams: AppengineAppsDomainMappingsCreatePathParams;
    queryParams: AppengineAppsDomainMappingsCreateQueryParams;
    request?: shared.DomainMapping;
    security: AppengineAppsDomainMappingsCreateSecurity;
}
export declare class AppengineAppsDomainMappingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
