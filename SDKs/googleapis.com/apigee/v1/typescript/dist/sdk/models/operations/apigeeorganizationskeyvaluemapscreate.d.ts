import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsKeyvaluemapsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsKeyvaluemapsCreateQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsKeyvaluemapsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsKeyvaluemapsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsKeyvaluemapsCreatePathParams;
    queryParams: ApigeeOrganizationsKeyvaluemapsCreateQueryParams;
    request?: shared.GoogleCloudApigeeV1KeyValueMap;
    security: ApigeeOrganizationsKeyvaluemapsCreateSecurity;
}
export declare class ApigeeOrganizationsKeyvaluemapsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1KeyValueMap?: shared.GoogleCloudApigeeV1KeyValueMap;
    statusCode: number;
}
