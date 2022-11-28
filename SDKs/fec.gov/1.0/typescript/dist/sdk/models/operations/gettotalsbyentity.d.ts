import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTotalsByEntityQueryParams extends SpeakeasyBase {
    apiKey: string;
    cycle: number;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetTotalsByEntityRequest extends SpeakeasyBase {
    queryParams: GetTotalsByEntityQueryParams;
}
export declare class GetTotalsByEntityResponse extends SpeakeasyBase {
    contentType: string;
    entityReceiptDisbursementTotalsPage?: shared.EntityReceiptDisbursementTotalsPage;
    statusCode: number;
}
