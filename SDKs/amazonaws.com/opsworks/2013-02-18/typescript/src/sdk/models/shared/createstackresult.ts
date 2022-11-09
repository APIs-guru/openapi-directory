import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateStackResult
/** 
 * Contains the response to a <code>CreateStack</code> request.
**/
export class CreateStackResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
