import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccessapprovalProjectsApprovalRequestsInvalidatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccessapprovalProjectsApprovalRequestsInvalidateQueryParams extends SpeakeasyBase {
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
export declare class AccessapprovalProjectsApprovalRequestsInvalidateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccessapprovalProjectsApprovalRequestsInvalidateRequest extends SpeakeasyBase {
    pathParams: AccessapprovalProjectsApprovalRequestsInvalidatePathParams;
    queryParams: AccessapprovalProjectsApprovalRequestsInvalidateQueryParams;
    request?: Map<string, any>;
    security: AccessapprovalProjectsApprovalRequestsInvalidateSecurity;
}
export declare class AccessapprovalProjectsApprovalRequestsInvalidateResponse extends SpeakeasyBase {
    approvalRequest?: shared.ApprovalRequest;
    contentType: string;
    statusCode: number;
}
