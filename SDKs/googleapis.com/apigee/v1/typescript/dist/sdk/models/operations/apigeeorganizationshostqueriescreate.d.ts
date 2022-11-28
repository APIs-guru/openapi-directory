import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsHostQueriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsHostQueriesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsHostQueriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsHostQueriesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsHostQueriesCreatePathParams;
    queryParams: ApigeeOrganizationsHostQueriesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1Query;
    security: ApigeeOrganizationsHostQueriesCreateSecurity;
}
export declare class ApigeeOrganizationsHostQueriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1AsyncQuery?: shared.GoogleCloudApigeeV1AsyncQuery;
    statusCode: number;
}
