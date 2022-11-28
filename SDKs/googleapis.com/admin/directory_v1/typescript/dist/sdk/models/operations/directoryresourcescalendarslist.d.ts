import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesCalendarsListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryResourcesCalendarsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryResourcesCalendarsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsListSecurity extends SpeakeasyBase {
    option1?: DirectoryResourcesCalendarsListSecurityOption1;
    option2?: DirectoryResourcesCalendarsListSecurityOption2;
}
export declare class DirectoryResourcesCalendarsListRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesCalendarsListPathParams;
    queryParams: DirectoryResourcesCalendarsListQueryParams;
    security: DirectoryResourcesCalendarsListSecurity;
}
export declare class DirectoryResourcesCalendarsListResponse extends SpeakeasyBase {
    calendarResources?: shared.CalendarResources;
    contentType: string;
    statusCode: number;
}
