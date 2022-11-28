import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Filter
/** 
 * A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
