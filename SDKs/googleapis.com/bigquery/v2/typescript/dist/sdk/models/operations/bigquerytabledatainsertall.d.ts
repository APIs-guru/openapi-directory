import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTabledataInsertAllPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    tableId: string;
}
export declare class BigqueryTabledataInsertAllQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTabledataInsertAllSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTabledataInsertAllSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTabledataInsertAllSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTabledataInsertAllSecurity extends SpeakeasyBase {
    option1?: BigqueryTabledataInsertAllSecurityOption1;
    option2?: BigqueryTabledataInsertAllSecurityOption2;
    option3?: BigqueryTabledataInsertAllSecurityOption3;
}
export declare class BigqueryTabledataInsertAllRequest extends SpeakeasyBase {
    pathParams: BigqueryTabledataInsertAllPathParams;
    queryParams: BigqueryTabledataInsertAllQueryParams;
    request?: shared.TableDataInsertAllRequest;
    security: BigqueryTabledataInsertAllSecurity;
}
export declare class BigqueryTabledataInsertAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tableDataInsertAllResponse?: shared.TableDataInsertAllResponse;
}
