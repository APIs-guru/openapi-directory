import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSharedflowsRevisionsDeploymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsDeploymentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sharedFlows?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsDeploymentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSharedflowsRevisionsDeploymentsListPathParams;
    queryParams: ApigeeOrganizationsSharedflowsRevisionsDeploymentsListQueryParams;
    security: ApigeeOrganizationsSharedflowsRevisionsDeploymentsListSecurity;
}
export declare class ApigeeOrganizationsSharedflowsRevisionsDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListDeploymentsResponse?: shared.GoogleCloudApigeeV1ListDeploymentsResponse;
    statusCode: number;
}
