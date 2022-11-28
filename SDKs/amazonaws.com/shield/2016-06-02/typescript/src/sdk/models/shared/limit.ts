import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Limit
/** 
 * Specifies how many protections of a given type you can create.
**/
export class Limit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
