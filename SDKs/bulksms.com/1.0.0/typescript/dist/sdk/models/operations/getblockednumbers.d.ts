import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBlockedNumbersQueryParams extends SpeakeasyBase {
    limit?: number;
    minId?: number;
}
export declare class GetBlockedNumbersSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetBlockedNumbersRequest extends SpeakeasyBase {
    queryParams: GetBlockedNumbersQueryParams;
    security: GetBlockedNumbersSecurity;
}
export declare class GetBlockedNumbersResponse extends SpeakeasyBase {
    blockedNumber?: shared.BlockedNumber;
    contentType: string;
    statusCode: number;
}
