import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterNameStringTypeEnum } from "./filternamestringtypeenum";



// Filter
/** 
 * Allows you to add filters when you use the search function in Secrets Manager.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: FilterNameStringTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
