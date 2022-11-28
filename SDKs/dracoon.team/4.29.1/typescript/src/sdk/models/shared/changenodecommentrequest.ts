import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangeNodeCommentRequest
/** 
 * Request model for updating a node comment
**/
export class ChangeNodeCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
