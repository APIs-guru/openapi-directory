import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMessagesSortOrderEnum {
    Ascending = "ASCENDING"
}
export declare class GetMessagesQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    sortOrder?: GetMessagesSortOrderEnum;
}
export declare class GetMessagesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetMessagesRequest extends SpeakeasyBase {
    queryParams: GetMessagesQueryParams;
    security: GetMessagesSecurity;
}
export declare class GetMessagesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    messages?: shared.Message[];
    statusCode: number;
}
