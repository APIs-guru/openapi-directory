import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsQueriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsQueriesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsEnvironmentsQueriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsQueriesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsQueriesCreatePathParams;
    queryParams: ApigeeOrganizationsEnvironmentsQueriesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1Query;
    security: ApigeeOrganizationsEnvironmentsQueriesCreateSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsQueriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1AsyncQuery?: shared.GoogleCloudApigeeV1AsyncQuery;
    statusCode: number;
}
