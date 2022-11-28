import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateDetails
/** 
 * Details about a date column.
**/
export class DateDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasTime" })
  hasTime?: boolean;
}
