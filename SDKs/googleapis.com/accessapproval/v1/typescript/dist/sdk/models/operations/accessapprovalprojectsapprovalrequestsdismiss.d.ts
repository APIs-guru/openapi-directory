import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccessapprovalProjectsApprovalRequestsDismissPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccessapprovalProjectsApprovalRequestsDismissQueryParams extends SpeakeasyBase {
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
export declare class AccessapprovalProjectsApprovalRequestsDismissSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccessapprovalProjectsApprovalRequestsDismissRequest extends SpeakeasyBase {
    pathParams: AccessapprovalProjectsApprovalRequestsDismissPathParams;
    queryParams: AccessapprovalProjectsApprovalRequestsDismissQueryParams;
    request?: Map<string, any>;
    security: AccessapprovalProjectsApprovalRequestsDismissSecurity;
}
export declare class AccessapprovalProjectsApprovalRequestsDismissResponse extends SpeakeasyBase {
    approvalRequest?: shared.ApprovalRequest;
    contentType: string;
    statusCode: number;
}
