import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlertcenterAlertsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AlertcenterAlertsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterAlertsListRequest extends SpeakeasyBase {
    queryParams: AlertcenterAlertsListQueryParams;
    security: AlertcenterAlertsListSecurity;
}
export declare class AlertcenterAlertsListResponse extends SpeakeasyBase {
    contentType: string;
    listAlertsResponse?: shared.ListAlertsResponse;
    statusCode: number;
}
