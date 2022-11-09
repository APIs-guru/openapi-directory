import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Alias
/** 
 * An alias for an edge.
**/
export class Alias extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
