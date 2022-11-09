import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFactOnthisdayEventQueryParams extends SpeakeasyBase {
    day?: string;
    month?: string;
}
export declare class GetFactOnthisdayEventSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactOnthisdayEventRequest extends SpeakeasyBase {
    queryParams: GetFactOnthisdayEventQueryParams;
    security: GetFactOnthisdayEventSecurity;
}
export declare class GetFactOnthisdayEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
