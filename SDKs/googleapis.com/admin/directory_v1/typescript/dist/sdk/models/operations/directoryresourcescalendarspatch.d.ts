import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesCalendarsPatchPathParams extends SpeakeasyBase {
    calendarResourceId: string;
    customer: string;
}
export declare class DirectoryResourcesCalendarsPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesCalendarsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesCalendarsPatchPathParams;
    queryParams: DirectoryResourcesCalendarsPatchQueryParams;
    request?: shared.CalendarResource;
    security: DirectoryResourcesCalendarsPatchSecurity;
}
export declare class DirectoryResourcesCalendarsPatchResponse extends SpeakeasyBase {
    calendarResource?: shared.CalendarResource;
    contentType: string;
    statusCode: number;
}
