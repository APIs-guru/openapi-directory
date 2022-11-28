import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsTraceConfigOverridesListPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsTraceConfigOverridesListQueryParams;
    security: ApigeeOrganizationsEnvironmentsTraceConfigOverridesListSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListTraceConfigOverridesResponse?: shared.GoogleCloudApigeeV1ListTraceConfigOverridesResponse;
    statusCode: number;
}
