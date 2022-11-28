import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryRoutinesInsertPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryRoutinesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryRoutinesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesInsertSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesInsertSecurityOption1;
    option2?: BigqueryRoutinesInsertSecurityOption2;
}
export declare class BigqueryRoutinesInsertRequest extends SpeakeasyBase {
    pathParams: BigqueryRoutinesInsertPathParams;
    queryParams: BigqueryRoutinesInsertQueryParams;
    request?: shared.RoutineInput;
    security: BigqueryRoutinesInsertSecurity;
}
export declare class BigqueryRoutinesInsertResponse extends SpeakeasyBase {
    contentType: string;
    routine?: shared.Routine;
    statusCode: number;
}
