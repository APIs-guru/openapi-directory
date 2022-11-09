import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateDetails
/** 
 * Details about a date column.
**/
export class DateDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasTime" })
  hasTime?: boolean;
}
