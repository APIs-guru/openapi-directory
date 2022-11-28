import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alias
/** 
 * An alias for an edge.
**/
export class Alias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
