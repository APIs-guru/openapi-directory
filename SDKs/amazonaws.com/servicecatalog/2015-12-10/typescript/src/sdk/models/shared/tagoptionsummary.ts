import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagOptionSummary
/** 
 * Summary information about a TagOption.
**/
export class TagOptionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
