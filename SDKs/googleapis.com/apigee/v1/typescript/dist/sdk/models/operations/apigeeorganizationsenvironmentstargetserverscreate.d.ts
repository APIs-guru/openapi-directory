import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsTargetserversCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsTargetserversCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsTargetserversCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsTargetserversCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsTargetserversCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsTargetserversCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1TargetServer;
    security: ApigeeOrganizationsEnvironmentsTargetserversCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsTargetserversCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1TargetServer?: shared.GoogleCloudApigeeV1TargetServer;
    statusCode: number;
}
