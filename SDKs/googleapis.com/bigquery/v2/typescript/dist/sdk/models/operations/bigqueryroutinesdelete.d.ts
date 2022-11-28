import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryRoutinesDeletePathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    routineId: string;
}
export declare class BigqueryRoutinesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryRoutinesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRoutinesDeleteSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesDeleteSecurityOption1;
    option2?: BigqueryRoutinesDeleteSecurityOption2;
}
export declare class BigqueryRoutinesDeleteRequest extends SpeakeasyBase {
    pathParams: BigqueryRoutinesDeletePathParams;
    queryParams: BigqueryRoutinesDeleteQueryParams;
    security: BigqueryRoutinesDeleteSecurity;
}
export declare class BigqueryRoutinesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
