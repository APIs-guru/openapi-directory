import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1TraceConfigOverride;
    security: ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1TraceConfigOverride?: shared.GoogleCloudApigeeV1TraceConfigOverride;
    statusCode: number;
}
