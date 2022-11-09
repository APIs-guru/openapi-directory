import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortSet
/** 
 * A set of port ranges for use in the rules in a rule group. 
**/
export class PortSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=Definition" })
  definition?: string[];
}
