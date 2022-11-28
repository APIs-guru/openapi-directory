import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetPaymentsRequest extends SpeakeasyBase {
    queryParams: GetPaymentsQueryParams;
}
export declare class GetPaymentsResponse extends SpeakeasyBase {
    accountLineItemEntities?: shared.AccountLineItemEntity[];
    contentType: string;
    statusCode: number;
}
