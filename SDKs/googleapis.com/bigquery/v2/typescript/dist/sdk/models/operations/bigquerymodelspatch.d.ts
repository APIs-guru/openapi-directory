import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryModelsPatchPathParams extends SpeakeasyBase {
    datasetId: string;
    modelId: string;
    projectId: string;
}
export declare class BigqueryModelsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryModelsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryModelsPatchSecurity extends SpeakeasyBase {
    option1?: BigqueryModelsPatchSecurityOption1;
    option2?: BigqueryModelsPatchSecurityOption2;
}
export declare class BigqueryModelsPatchRequest extends SpeakeasyBase {
    pathParams: BigqueryModelsPatchPathParams;
    queryParams: BigqueryModelsPatchQueryParams;
    request?: shared.ModelInput;
    security: BigqueryModelsPatchSecurity;
}
export declare class BigqueryModelsPatchResponse extends SpeakeasyBase {
    contentType: string;
    model?: shared.Model;
    statusCode: number;
}
