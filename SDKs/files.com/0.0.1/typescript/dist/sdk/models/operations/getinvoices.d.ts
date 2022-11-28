import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoicesQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetInvoicesRequest extends SpeakeasyBase {
    queryParams: GetInvoicesQueryParams;
}
export declare class GetInvoicesResponse extends SpeakeasyBase {
    accountLineItemEntities?: shared.AccountLineItemEntity[];
    contentType: string;
    statusCode: number;
}
