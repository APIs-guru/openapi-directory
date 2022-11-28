import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AppsactivityActivitiesListGroupingStrategyEnum {
    DriveUi = "driveUi",
    None = "none"
}
export declare class AppsactivityActivitiesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    driveAncestorId?: string;
    driveFileId?: string;
    fields?: string;
    groupingStrategy?: AppsactivityActivitiesListGroupingStrategyEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    userId?: string;
    userIp?: string;
}
export declare class AppsactivityActivitiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppsactivityActivitiesListRequest extends SpeakeasyBase {
    queryParams: AppsactivityActivitiesListQueryParams;
    security: AppsactivityActivitiesListSecurity;
}
export declare class AppsactivityActivitiesListResponse extends SpeakeasyBase {
    contentType: string;
    listActivitiesResponse?: shared.ListActivitiesResponse;
    statusCode: number;
}
