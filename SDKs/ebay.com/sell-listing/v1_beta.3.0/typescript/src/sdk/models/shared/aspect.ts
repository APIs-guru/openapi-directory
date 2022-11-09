import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Aspect
/** 
 * The type that defines the fields for the item aspects.
**/
export class Aspect extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
