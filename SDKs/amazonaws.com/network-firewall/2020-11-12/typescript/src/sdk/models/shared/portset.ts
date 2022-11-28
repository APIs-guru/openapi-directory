import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortSet
/** 
 * A set of port ranges for use in the rules in a rule group. 
**/
export class PortSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: string[];
}
