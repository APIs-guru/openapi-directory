import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesCalendarsInsertPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryResourcesCalendarsInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesCalendarsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesCalendarsInsertPathParams;
    queryParams: DirectoryResourcesCalendarsInsertQueryParams;
    request?: shared.CalendarResource;
    security: DirectoryResourcesCalendarsInsertSecurity;
}
export declare class DirectoryResourcesCalendarsInsertResponse extends SpeakeasyBase {
    calendarResource?: shared.CalendarResource;
    contentType: string;
    statusCode: number;
}
