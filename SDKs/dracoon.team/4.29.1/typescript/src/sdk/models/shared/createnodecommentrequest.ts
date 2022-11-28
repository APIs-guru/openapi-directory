import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateNodeCommentRequest
/** 
 * Request model for creating a node comment
**/
export class CreateNodeCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
