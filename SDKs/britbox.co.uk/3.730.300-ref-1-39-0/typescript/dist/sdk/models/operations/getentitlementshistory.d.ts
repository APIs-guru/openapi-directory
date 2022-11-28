import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntitlementsHistoryQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetEntitlementsHistorySecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetEntitlementsHistoryRequest extends SpeakeasyBase {
    queryParams: GetEntitlementsHistoryQueryParams;
    security: GetEntitlementsHistorySecurity;
}
export declare class GetEntitlementsHistoryResponse extends SpeakeasyBase {
    contentType: string;
    itvEntitlementsHistory?: shared.ItvEntitlementsHistory;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
