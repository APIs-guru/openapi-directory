import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsHostQueriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsHostQueriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataset?: string;
    envgroupHostname?: string;
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
export declare class ApigeeOrganizationsHostQueriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsHostQueriesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsHostQueriesListPathParams;
    queryParams: ApigeeOrganizationsHostQueriesListQueryParams;
    security: ApigeeOrganizationsHostQueriesListSecurity;
}
export declare class ApigeeOrganizationsHostQueriesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListAsyncQueriesResponse?: shared.GoogleCloudApigeeV1ListAsyncQueriesResponse;
    statusCode: number;
}
