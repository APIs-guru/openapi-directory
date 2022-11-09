import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Province } from "./province";

export enum HolidayFederalEnum {
    Zero = "0"
,    One = "1"
,    True = "true"
,    False = "false"
}


// Holiday
/** 
 * A Canadian holiday. Includes a name, date, and a list of regions that observe this holiday.
**/
export class Holiday extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=federal" })
  federal?: HolidayFederalEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name Fr" })
  nameFr?: string;

  @Metadata({ data: "json, name=nameEn" })
  nameEn?: string;

  @Metadata({ data: "json, name=provinces", elemType: shared.Province })
  provinces?: Province[];
}
