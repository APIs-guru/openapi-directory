import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterNameStringTypeEnum } from "./filternamestringtypeenum";


// Filter
/** 
 * Allows you to add filters when you use the search function in Secrets Manager.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: FilterNameStringTypeEnum;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
