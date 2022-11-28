import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Province } from "./province";


export enum HolidayFederalEnum {
    Zero = "0",
    One = "1",
    True = "true",
    False = "false"
}


// Holiday
/** 
 * A Canadian holiday. Includes a name, date, and a list of regions that observe this holiday.
**/
export class Holiday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=federal" })
  federal?: HolidayFederalEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name Fr" })
  nameFr?: string;

  @SpeakeasyMetadata({ data: "json, name=nameEn" })
  nameEn?: string;

  @SpeakeasyMetadata({ data: "json, name=provinces", elemType: Province })
  provinces?: Province[];
}
