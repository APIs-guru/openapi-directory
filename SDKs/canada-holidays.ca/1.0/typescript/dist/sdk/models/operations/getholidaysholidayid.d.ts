import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHolidaysHolidayIdPathParams extends SpeakeasyBase {
    holidayId: number;
}
export declare class GetHolidaysHolidayIdQueryParams extends SpeakeasyBase {
    year?: string;
}
export declare class GetHolidaysHolidayId200ApplicationJson extends SpeakeasyBase {
    holiday?: shared.Holiday;
}
export declare class GetHolidaysHolidayId404ApplicationJson extends SpeakeasyBase {
    error?: shared.Error;
}
export declare class GetHolidaysHolidayIdRequest extends SpeakeasyBase {
    pathParams: GetHolidaysHolidayIdPathParams;
    queryParams: GetHolidaysHolidayIdQueryParams;
}
export declare class GetHolidaysHolidayIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHolidaysHolidayId200ApplicationJsonObject?: GetHolidaysHolidayId200ApplicationJson;
    getHolidaysHolidayId404ApplicationJsonObject?: GetHolidaysHolidayId404ApplicationJson;
}
