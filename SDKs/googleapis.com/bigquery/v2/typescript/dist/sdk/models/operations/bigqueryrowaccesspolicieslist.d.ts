import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryRowAccessPoliciesListPathParams extends SpeakeasyBase {
    datasetId: string;
    projectId: string;
    tableId: string;
}
export declare class BigqueryRowAccessPoliciesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryRowAccessPoliciesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRowAccessPoliciesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRowAccessPoliciesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryRowAccessPoliciesListSecurity extends SpeakeasyBase {
    option1?: BigqueryRowAccessPoliciesListSecurityOption1;
    option2?: BigqueryRowAccessPoliciesListSecurityOption2;
    option3?: BigqueryRowAccessPoliciesListSecurityOption3;
}
export declare class BigqueryRowAccessPoliciesListRequest extends SpeakeasyBase {
    pathParams: BigqueryRowAccessPoliciesListPathParams;
    queryParams: BigqueryRowAccessPoliciesListQueryParams;
    security: BigqueryRowAccessPoliciesListSecurity;
}
export declare class BigqueryRowAccessPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listRowAccessPoliciesResponse?: shared.ListRowAccessPoliciesResponse;
    statusCode: number;
}
