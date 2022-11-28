import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesCalendarsDeletePathParams extends SpeakeasyBase {
    calendarResourceId: string;
    customer: string;
}
export declare class DirectoryResourcesCalendarsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesCalendarsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesCalendarsDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesCalendarsDeletePathParams;
    queryParams: DirectoryResourcesCalendarsDeleteQueryParams;
    security: DirectoryResourcesCalendarsDeleteSecurity;
}
export declare class DirectoryResourcesCalendarsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
