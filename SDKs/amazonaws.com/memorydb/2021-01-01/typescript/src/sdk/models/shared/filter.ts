import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Filter
/** 
 * Used to streamline results of a search based on the property being filtered.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
