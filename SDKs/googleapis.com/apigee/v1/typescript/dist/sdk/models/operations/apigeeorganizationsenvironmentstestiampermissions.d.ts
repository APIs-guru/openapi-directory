import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ApigeeOrganizationsEnvironmentsTestIamPermissionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsTestIamPermissionsPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: ApigeeOrganizationsEnvironmentsTestIamPermissionsSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
