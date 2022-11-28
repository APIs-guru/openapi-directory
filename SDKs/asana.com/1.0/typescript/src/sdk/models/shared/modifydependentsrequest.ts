import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyDependentsRequest
/** 
 * A set of dependent tasks.
**/
export class ModifyDependentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependents" })
  dependents?: string[];
}
