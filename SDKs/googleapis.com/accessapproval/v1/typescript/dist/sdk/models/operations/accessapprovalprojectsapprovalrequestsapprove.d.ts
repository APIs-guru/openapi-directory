import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccessapprovalProjectsApprovalRequestsApprovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccessapprovalProjectsApprovalRequestsApproveQueryParams extends SpeakeasyBase {
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
export declare class AccessapprovalProjectsApprovalRequestsApproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccessapprovalProjectsApprovalRequestsApproveRequest extends SpeakeasyBase {
    pathParams: AccessapprovalProjectsApprovalRequestsApprovePathParams;
    queryParams: AccessapprovalProjectsApprovalRequestsApproveQueryParams;
    request?: shared.ApproveApprovalRequestMessage;
    security: AccessapprovalProjectsApprovalRequestsApproveSecurity;
}
export declare class AccessapprovalProjectsApprovalRequestsApproveResponse extends SpeakeasyBase {
    approvalRequest?: shared.ApprovalRequest;
    contentType: string;
    statusCode: number;
}
