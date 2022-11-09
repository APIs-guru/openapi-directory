import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsDomainMappingsListPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsDomainMappingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsDomainMappingsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsDomainMappingsListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsDomainMappingsListSecurityOption1;
    option2?: AppengineAppsDomainMappingsListSecurityOption2;
    option3?: AppengineAppsDomainMappingsListSecurityOption3;
}
export declare class AppengineAppsDomainMappingsListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsDomainMappingsListPathParams;
    queryParams: AppengineAppsDomainMappingsListQueryParams;
    security: AppengineAppsDomainMappingsListSecurity;
}
export declare class AppengineAppsDomainMappingsListResponse extends SpeakeasyBase {
    contentType: string;
    listDomainMappingsResponse?: shared.ListDomainMappingsResponse;
    statusCode: number;
}
