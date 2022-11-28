import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsListPathParams;
    queryParams: ApigeeOrganizationsListQueryParams;
    security: ApigeeOrganizationsListSecurity;
}
export declare class ApigeeOrganizationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListOrganizationsResponse?: shared.GoogleCloudApigeeV1ListOrganizationsResponse;
    statusCode: number;
}
