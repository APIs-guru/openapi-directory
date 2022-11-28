import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesCalendarsGetPathParams extends SpeakeasyBase {
    calendarResourceId: string;
    customer: string;
}
export declare class DirectoryResourcesCalendarsGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesCalendarsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsGetSecurity extends SpeakeasyBase {
    option1?: DirectoryResourcesCalendarsGetSecurityOption1;
    option2?: DirectoryResourcesCalendarsGetSecurityOption2;
}
export declare class DirectoryResourcesCalendarsGetRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesCalendarsGetPathParams;
    queryParams: DirectoryResourcesCalendarsGetQueryParams;
    security: DirectoryResourcesCalendarsGetSecurity;
}
export declare class DirectoryResourcesCalendarsGetResponse extends SpeakeasyBase {
    calendarResource?: shared.CalendarResource;
    contentType: string;
    statusCode: number;
}
