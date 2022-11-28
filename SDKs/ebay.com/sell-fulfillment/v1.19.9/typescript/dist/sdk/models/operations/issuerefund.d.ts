import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssueRefundPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class IssueRefundSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class IssueRefundRequest extends SpeakeasyBase {
    pathParams: IssueRefundPathParams;
    request?: shared.IssueRefundRequest;
    security: IssueRefundSecurity;
}
export declare class IssueRefundResponse extends SpeakeasyBase {
    contentType: string;
    refund?: shared.Refund;
    statusCode: number;
}
