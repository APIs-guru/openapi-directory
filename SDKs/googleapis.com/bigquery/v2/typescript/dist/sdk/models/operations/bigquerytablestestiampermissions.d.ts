import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryTablesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigqueryTablesTestIamPermissionsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class BigqueryTablesTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryTablesTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesTestIamPermissionsSecurityOption1;
    option2?: BigqueryTablesTestIamPermissionsSecurityOption2;
    option3?: BigqueryTablesTestIamPermissionsSecurityOption3;
}
export declare class BigqueryTablesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: BigqueryTablesTestIamPermissionsPathParams;
    queryParams: BigqueryTablesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: BigqueryTablesTestIamPermissionsSecurity;
}
export declare class BigqueryTablesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
