import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Filter
/** 
 * A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ValueList" })
  valueList?: string[];
}
