import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillingHistoryPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class GetBillingHistoryQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetBillingHistorySecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetBillingHistoryRequest extends SpeakeasyBase {
    pathParams: GetBillingHistoryPathParams;
    queryParams: GetBillingHistoryQueryParams;
    request: shared.ItvBillingHistoryRequest;
    security: GetBillingHistorySecurity;
}
export declare class GetBillingHistoryResponse extends SpeakeasyBase {
    contentType: string;
    itvBillingHistory?: shared.ItvBillingHistory;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
