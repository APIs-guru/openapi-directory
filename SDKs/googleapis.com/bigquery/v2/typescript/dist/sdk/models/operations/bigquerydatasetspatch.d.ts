import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryDatasetsPatchPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
}
export declare class BigqueryDatasetsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryDatasetsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryDatasetsPatchSecurity extends SpeakeasyBase {
    option1?: BigqueryDatasetsPatchSecurityOption1;
    option2?: BigqueryDatasetsPatchSecurityOption2;
}
export declare class BigqueryDatasetsPatchRequest extends SpeakeasyBase {
    pathParams: BigqueryDatasetsPatchPathParams;
    queryParams: BigqueryDatasetsPatchQueryParams;
    request?: shared.Dataset;
    security: BigqueryDatasetsPatchSecurity;
}
export declare class BigqueryDatasetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
