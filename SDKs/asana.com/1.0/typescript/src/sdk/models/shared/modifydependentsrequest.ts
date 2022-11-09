import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyDependentsRequest
/** 
 * A set of dependent tasks.
**/
export class ModifyDependentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependents" })
  dependents?: string[];
}
