import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccessapprovalProjectsApprovalRequestsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccessapprovalProjectsApprovalRequestsGetQueryParams extends SpeakeasyBase {
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
export declare class AccessapprovalProjectsApprovalRequestsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccessapprovalProjectsApprovalRequestsGetRequest extends SpeakeasyBase {
    pathParams: AccessapprovalProjectsApprovalRequestsGetPathParams;
    queryParams: AccessapprovalProjectsApprovalRequestsGetQueryParams;
    security: AccessapprovalProjectsApprovalRequestsGetSecurity;
}
export declare class AccessapprovalProjectsApprovalRequestsGetResponse extends SpeakeasyBase {
    approvalRequest?: shared.ApprovalRequest;
    contentType: string;
    statusCode: number;
}
