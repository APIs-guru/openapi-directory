import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsKeyvaluemapsEntriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsKeyvaluemapsEntriesCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsKeyvaluemapsEntriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsKeyvaluemapsEntriesCreatePathParams;
    queryParams: ApigeeOrganizationsKeyvaluemapsEntriesCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1KeyValueEntry;
    security: ApigeeOrganizationsKeyvaluemapsEntriesCreateSecurity;
}
export declare class ApigeeOrganizationsKeyvaluemapsEntriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1KeyValueEntry?: shared.GoogleCloudApigeeV1KeyValueEntry;
    statusCode: number;
}
