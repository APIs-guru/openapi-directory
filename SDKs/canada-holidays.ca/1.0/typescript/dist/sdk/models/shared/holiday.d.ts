import { SpeakeasyBase } from "../../../internal/utils";
import { Province } from "./province";
export declare enum HolidayFederalEnum {
    Zero = "0",
    One = "1",
    True = "true",
    False = "false"
}
/**
 * A Canadian holiday. Includes a name, date, and a list of regions that observe this holiday.
**/
export declare class Holiday extends SpeakeasyBase {
    date?: Date;
    federal?: HolidayFederalEnum;
    id?: number;
    nameFr?: string;
    nameEn?: string;
    provinces?: Province[];
}
