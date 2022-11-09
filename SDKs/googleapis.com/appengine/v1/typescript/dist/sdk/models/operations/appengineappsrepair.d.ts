import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsRepairPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsRepairQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsRepairSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsRepairRequest extends SpeakeasyBase {
    pathParams: AppengineAppsRepairPathParams;
    queryParams: AppengineAppsRepairQueryParams;
    request?: Map<string, any>;
    security: AppengineAppsRepairSecurity;
}
export declare class AppengineAppsRepairResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
