import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryRoutinesListPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryRoutinesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    filter?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    userIp?: string;
}
export declare class BigqueryRoutinesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesListSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesListSecurityOption1;
    option2?: BigqueryRoutinesListSecurityOption2;
    option3?: BigqueryRoutinesListSecurityOption3;
}
export declare class BigqueryRoutinesListRequest extends SpeakeasyBase {
    pathParams: BigqueryRoutinesListPathParams;
    queryParams: BigqueryRoutinesListQueryParams;
    security: BigqueryRoutinesListSecurity;
}
export declare class BigqueryRoutinesListResponse extends SpeakeasyBase {
    contentType: string;
    listRoutinesResponse?: shared.ListRoutinesResponse;
    statusCode: number;
}
