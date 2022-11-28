import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeOrganizationsSharedflowsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeOrganizationsSharedflowsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeMetaData?: boolean;
    includeRevisions?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeOrganizationsSharedflowsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeOrganizationsSharedflowsListRequest extends SpeakeasyBase {
    pathParams: ApigeeOrganizationsSharedflowsListPathParams;
    queryParams: ApigeeOrganizationsSharedflowsListQueryParams;
    security: ApigeeOrganizationsSharedflowsListSecurity;
}
export declare class ApigeeOrganizationsSharedflowsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudApigeeV1ListSharedFlowsResponse?: shared.GoogleCloudApigeeV1ListSharedFlowsResponse;
    statusCode: number;
}
