import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloneStackResult
/** 
 * Contains the response to a <code>CloneStack</code> request.
**/
export class CloneStackResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
