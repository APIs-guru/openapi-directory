import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestListOfEventTypesForConfigManagerHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestListOfEventTypesForConfigManagerRequest extends SpeakeasyBase {
    headers: RequestListOfEventTypesForConfigManagerHeaders;
}
export declare class RequestListOfEventTypesForConfigManagerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventTypeList?: shared.EventTypeList;
    statusCode: number;
}
