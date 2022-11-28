import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsKeyvaluemapsEntriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsKeyvaluemapsEntriesListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsKeyvaluemapsEntriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsKeyvaluemapsEntriesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsKeyvaluemapsEntriesListPathParams;
    queryParams: ApigeeOrganizationsKeyvaluemapsEntriesListQueryParams;
    security: ApigeeOrganizationsKeyvaluemapsEntriesListSecurity;
}
export declare class ApigeeOrganizationsKeyvaluemapsEntriesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListKeyValueEntriesResponse?: shared.GoogleCloudApigeeV1ListKeyValueEntriesResponse;
    statusCode: number;
}
