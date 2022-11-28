import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventPathParams extends SpeakeasyBase {
    eventId: string;
}
export declare class GetEventHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetEventSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetEventRequest extends SpeakeasyBase {
    pathParams: GetEventPathParams;
    headers: GetEventHeaders;
    security: GetEventSecurity;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
