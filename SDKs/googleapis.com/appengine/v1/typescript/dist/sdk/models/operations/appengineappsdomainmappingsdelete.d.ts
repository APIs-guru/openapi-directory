import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsDomainMappingsDeletePathParams extends SpeakeasyBase {
    appsId: string;
    domainMappingsId: string;
}
export declare class AppengineAppsDomainMappingsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsDomainMappingsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsDeleteRequest extends SpeakeasyBase {
    pathParams: AppengineAppsDomainMappingsDeletePathParams;
    queryParams: AppengineAppsDomainMappingsDeleteQueryParams;
    security: AppengineAppsDomainMappingsDeleteSecurity;
}
export declare class AppengineAppsDomainMappingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
