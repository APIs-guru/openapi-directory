import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccessapprovalProjectsApprovalRequestsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AccessapprovalProjectsApprovalRequestsListQueryParams extends SpeakeasyBase {
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
export declare class AccessapprovalProjectsApprovalRequestsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccessapprovalProjectsApprovalRequestsListRequest extends SpeakeasyBase {
    pathParams: AccessapprovalProjectsApprovalRequestsListPathParams;
    queryParams: AccessapprovalProjectsApprovalRequestsListQueryParams;
    security: AccessapprovalProjectsApprovalRequestsListSecurity;
}
export declare class AccessapprovalProjectsApprovalRequestsListResponse extends SpeakeasyBase {
    contentType: string;
    listApprovalRequestsResponse?: shared.ListApprovalRequestsResponse;
    statusCode: number;
}
