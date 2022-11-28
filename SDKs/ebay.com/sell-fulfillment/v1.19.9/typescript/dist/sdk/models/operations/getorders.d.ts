import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersQueryParams extends SpeakeasyBase {
    fieldGroups?: string;
    filter?: string;
    limit?: string;
    offset?: string;
    orderIds?: string;
}
export declare class GetOrdersSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetOrdersRequest extends SpeakeasyBase {
    queryParams: GetOrdersQueryParams;
    security: GetOrdersSecurity;
}
export declare class GetOrdersResponse extends SpeakeasyBase {
    contentType: string;
    orderSearchPagedCollection?: shared.OrderSearchPagedCollection;
    statusCode: number;
}
