import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Filter
/** 
 * Information about a filter.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
