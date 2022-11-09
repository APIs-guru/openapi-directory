import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloneStackResult
/** 
 * Contains the response to a <code>CloneStack</code> request.
**/
export class CloneStackResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
