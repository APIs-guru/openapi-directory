import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagOptionSummary
/** 
 * Summary information about a TagOption.
**/
export class TagOptionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
