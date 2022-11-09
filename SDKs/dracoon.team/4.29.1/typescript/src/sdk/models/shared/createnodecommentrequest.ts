import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateNodeCommentRequest
/** 
 * Request model for creating a node comment
**/
export class CreateNodeCommentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}
