import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryProjectsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryProjectsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryProjectsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryProjectsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryProjectsListSecurity extends SpeakeasyBase {
    option1?: BigqueryProjectsListSecurityOption1;
    option2?: BigqueryProjectsListSecurityOption2;
    option3?: BigqueryProjectsListSecurityOption3;
}
export declare class BigqueryProjectsListRequest extends SpeakeasyBase {
    queryParams: BigqueryProjectsListQueryParams;
    security: BigqueryProjectsListSecurity;
}
export declare class BigqueryProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    projectList?: shared.ProjectList;
    statusCode: number;
}
