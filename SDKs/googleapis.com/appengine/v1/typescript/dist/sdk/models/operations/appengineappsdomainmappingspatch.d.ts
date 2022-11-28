import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsDomainMappingsPatchPathParams extends SpeakeasyBase {
    appsId: string;
    domainMappingsId: string;
}
export declare class AppengineAppsDomainMappingsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsDomainMappingsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsPatchRequest extends SpeakeasyBase {
    pathParams: AppengineAppsDomainMappingsPatchPathParams;
    queryParams: AppengineAppsDomainMappingsPatchQueryParams;
    request?: shared.DomainMapping;
    security: AppengineAppsDomainMappingsPatchSecurity;
}
export declare class AppengineAppsDomainMappingsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
