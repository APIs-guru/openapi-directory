import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListQueryParams;
    security: ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListDebugSessionsResponse?: shared.GoogleCloudApigeeV1ListDebugSessionsResponse;
    statusCode: number;
}
