import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesPatchPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    tableId: string;
}
export declare class BigqueryTablesPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    autodetectSchema?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesPatchSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesPatchSecurityOption1;
    option2?: BigqueryTablesPatchSecurityOption2;
}
export declare class BigqueryTablesPatchRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesPatchPathParams;
    queryParams: BigqueryTablesPatchQueryParams;
    request?: shared.Table;
    security: BigqueryTablesPatchSecurity;
}
export declare class BigqueryTablesPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    table?: shared.Table;
}
