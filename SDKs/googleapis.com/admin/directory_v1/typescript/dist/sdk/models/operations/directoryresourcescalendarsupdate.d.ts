import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesCalendarsUpdatePathParams extends SpeakeasyBase {
    calendarResourceId: string;
    customer: string;
}
export declare class DirectoryResourcesCalendarsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesCalendarsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesCalendarsUpdatePathParams;
    queryParams: DirectoryResourcesCalendarsUpdateQueryParams;
    request?: shared.CalendarResource;
    security: DirectoryResourcesCalendarsUpdateSecurity;
}
export declare class DirectoryResourcesCalendarsUpdateResponse extends SpeakeasyBase {
    calendarResource?: shared.CalendarResource;
    contentType: string;
    statusCode: number;
}
