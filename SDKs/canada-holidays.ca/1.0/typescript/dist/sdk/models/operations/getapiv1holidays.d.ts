import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApiV1HolidaysFederalEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}
export declare class GetApiV1HolidaysQueryParams extends SpeakeasyBase {
    federal?: GetApiV1HolidaysFederalEnum;
    year?: string;
}
export declare class GetApiV1Holidays200ApplicationJson extends SpeakeasyBase {
    holidays?: shared.Holiday[];
}
export declare class GetApiV1HolidaysRequest extends SpeakeasyBase {
    queryParams: GetApiV1HolidaysQueryParams;
}
export declare class GetApiV1HolidaysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getApiV1Holidays200ApplicationJsonObject?: GetApiV1Holidays200ApplicationJson;
}
