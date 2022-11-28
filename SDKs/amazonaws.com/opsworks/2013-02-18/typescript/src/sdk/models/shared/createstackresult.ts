import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateStackResult
/** 
 * Contains the response to a <code>CreateStack</code> request.
**/
export class CreateStackResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
