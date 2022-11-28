import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryJobsListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum BigqueryJobsListProjectionEnum {
    Full = "full",
    Minimal = "minimal"
}
export declare enum BigqueryJobsListStateFilterEnum {
    Done = "done",
    Pending = "pending",
    Running = "running"
}
export declare class BigqueryJobsListQueryParams extends SpeakeasyBase {
    allUsers?: boolean;
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxCreationTime?: string;
    maxResults?: number;
    minCreationTime?: string;
    oauthToken?: string;
    pageToken?: string;
    parentJobId?: string;
    prettyPrint?: boolean;
    projection?: BigqueryJobsListProjectionEnum;
    quotaUser?: string;
    stateFilter?: BigqueryJobsListStateFilterEnum[];
    userIp?: string;
}
export declare class BigqueryJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryJobsListSecurity extends SpeakeasyBase {
    option1?: BigqueryJobsListSecurityOption1;
    option2?: BigqueryJobsListSecurityOption2;
    option3?: BigqueryJobsListSecurityOption3;
}
export declare class BigqueryJobsListRequest extends SpeakeasyBase {
    pathParams: BigqueryJobsListPathParams;
    queryParams: BigqueryJobsListQueryParams;
    security: BigqueryJobsListSecurity;
}
export declare class BigqueryJobsListResponse extends SpeakeasyBase {
    contentType: string;
    jobList?: shared.JobList;
    statusCode: number;
}
