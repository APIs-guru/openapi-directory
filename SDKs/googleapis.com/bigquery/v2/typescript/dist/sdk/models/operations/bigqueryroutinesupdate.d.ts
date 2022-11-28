import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryRoutinesUpdatePathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    routineId: string;
}
export declare class BigqueryRoutinesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryRoutinesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesUpdateSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesUpdateSecurityOption1;
    option2?: BigqueryRoutinesUpdateSecurityOption2;
}
export declare class BigqueryRoutinesUpdateRequest extends SpeakeasyBase {
    pathParams: BigqueryRoutinesUpdatePathParams;
    queryParams: BigqueryRoutinesUpdateQueryParams;
    request?: shared.RoutineInput;
    security: BigqueryRoutinesUpdateSecurity;
}
export declare class BigqueryRoutinesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    routine?: shared.Routine;
    statusCode: number;
}
