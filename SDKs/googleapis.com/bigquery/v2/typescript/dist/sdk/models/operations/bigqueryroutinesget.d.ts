import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryRoutinesGetPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    routineId: string;
}
export declare class BigqueryRoutinesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    userIp?: string;
}
export declare class BigqueryRoutinesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesGetSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesGetSecurityOption1;
    option2?: BigqueryRoutinesGetSecurityOption2;
    option3?: BigqueryRoutinesGetSecurityOption3;
}
export declare class BigqueryRoutinesGetRequest extends SpeakeasyBase {
    pathParams: BigqueryRoutinesGetPathParams;
    queryParams: BigqueryRoutinesGetQueryParams;
    security: BigqueryRoutinesGetSecurity;
}
export declare class BigqueryRoutinesGetResponse extends SpeakeasyBase {
    contentType: string;
    routine?: shared.Routine;
    statusCode: number;
}
