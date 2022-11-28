import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReportsActivitiesWatchApplicationNameEnum {
    AccessTransparency = "access_transparency",
    Admin = "admin",
    Calendar = "calendar",
    Chat = "chat",
    Drive = "drive",
    Gcp = "gcp",
    Gplus = "gplus",
    Groups = "groups",
    GroupsEnterprise = "groups_enterprise",
    Jamboard = "jamboard",
    Login = "login",
    Meet = "meet",
    Mobile = "mobile",
    Rules = "rules",
    Saml = "saml",
    Token = "token",
    UserAccounts = "user_accounts",
    ContextAwareAccess = "context_aware_access",
    Chrome = "chrome",
    DataStudio = "data_studio",
    Keep = "keep"
}
export declare class ReportsActivitiesWatchPathParams extends SpeakeasyBase {
    applicationName: ReportsActivitiesWatchApplicationNameEnum;
    userKey: string;
}
export declare class ReportsActivitiesWatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    actorIpAddress?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    endTime?: string;
    eventName?: string;
    fields?: string;
    filters?: string;
    groupIdFilter?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orgUnitId?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ReportsActivitiesWatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReportsActivitiesWatchRequest extends SpeakeasyBase {
    pathParams: ReportsActivitiesWatchPathParams;
    queryParams: ReportsActivitiesWatchQueryParams;
    request?: shared.Channel;
    security: ReportsActivitiesWatchSecurity;
}
export declare class ReportsActivitiesWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
