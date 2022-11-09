import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Limit
/** 
 * Specifies how many protections of a given type you can create.
**/
export class Limit extends SpeakeasyBase {
  @Metadata({ data: "json, name=Max" })
  max?: number;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
