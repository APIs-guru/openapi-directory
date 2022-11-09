import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChangeNodeCommentRequest
/** 
 * Request model for updating a node comment
**/
export class ChangeNodeCommentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}
