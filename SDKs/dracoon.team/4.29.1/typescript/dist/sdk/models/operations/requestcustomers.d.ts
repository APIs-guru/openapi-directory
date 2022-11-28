import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestCustomersQueryParams extends SpeakeasyBase {
    filter?: string;
    includeAttributes?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestCustomersHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class RequestCustomersRequest extends SpeakeasyBase {
    queryParams: RequestCustomersQueryParams;
    headers: RequestCustomersHeaders;
}
export declare class RequestCustomersResponse extends SpeakeasyBase {
    contentType: string;
    customerList?: shared.CustomerList;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
