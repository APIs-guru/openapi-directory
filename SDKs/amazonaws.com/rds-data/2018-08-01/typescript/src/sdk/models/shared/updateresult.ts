import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";



// UpdateResult
/** 
 * The response elements represent the results of an update.
**/
export class UpdateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generatedFields", elemType: Field })
  generatedFields?: Field[];
}
