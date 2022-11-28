import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsQueriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsQueriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataset?: string;
    fields?: string;
    from?: string;
    inclQueriesWithoutReport?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    status?: string;
    submittedBy?: string;
    to?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsQueriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsQueriesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsQueriesListPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsQueriesListQueryParams;
    security: ApigeeOrganizationsEnvironmentsQueriesListSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsQueriesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListAsyncQueriesResponse?: shared.GoogleCloudApigeeV1ListAsyncQueriesResponse;
    statusCode: number;
}
