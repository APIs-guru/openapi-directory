import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams;
    queryParams: ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams;
    security: ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity;
}
export declare class ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListArchiveDeploymentsResponse?: shared.GoogleCloudApigeeV1ListArchiveDeploymentsResponse;
    statusCode: number;
}
