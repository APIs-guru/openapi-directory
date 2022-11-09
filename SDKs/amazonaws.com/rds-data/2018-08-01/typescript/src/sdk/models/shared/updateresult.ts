import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";


// UpdateResult
/** 
 * The response elements represent the results of an update.
**/
export class UpdateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=generatedFields", elemType: shared.Field })
  generatedFields?: Field[];
}
