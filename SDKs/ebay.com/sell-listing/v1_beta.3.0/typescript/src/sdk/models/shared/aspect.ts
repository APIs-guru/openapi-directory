import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aspect
/** 
 * The type that defines the fields for the item aspects.
**/
export class Aspect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
