import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationssettingsListPathParams extends SpeakeasyBase {
    enterpriseId: string;
    productId: string;
}
export declare class AndroidenterpriseManagedconfigurationssettingsListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationssettingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationssettingsListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationssettingsListPathParams;
    queryParams: AndroidenterpriseManagedconfigurationssettingsListQueryParams;
    security: AndroidenterpriseManagedconfigurationssettingsListSecurity;
}
export declare class AndroidenterpriseManagedconfigurationssettingsListResponse extends SpeakeasyBase {
    contentType: string;
    managedConfigurationsSettingsListResponse?: shared.ManagedConfigurationsSettingsListResponse;
    statusCode: number;
}
