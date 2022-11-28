import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestListOfEventTypesForTenantHeaders extends SpeakeasyBase {
    xSdsServiceToken?: string;
}
export declare class RequestListOfEventTypesForTenantRequest extends SpeakeasyBase {
    headers: RequestListOfEventTypesForTenantHeaders;
}
export declare class RequestListOfEventTypesForTenantResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventTypeList?: shared.EventTypeList;
    statusCode: number;
}
