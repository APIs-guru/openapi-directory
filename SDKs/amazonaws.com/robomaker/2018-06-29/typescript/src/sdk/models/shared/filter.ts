import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Filter
/** 
 * Information about a filter.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
