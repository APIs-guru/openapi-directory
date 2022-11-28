import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsInstancesListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeOrganizationsInstancesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsInstancesListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsInstancesListPathParams;
    queryParams: ApigeeOrganizationsInstancesListQueryParams;
    security: ApigeeOrganizationsInstancesListSecurity;
}
export declare class ApigeeOrganizationsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListInstancesResponse?: shared.GoogleCloudApigeeV1ListInstancesResponse;
    statusCode: number;
}
