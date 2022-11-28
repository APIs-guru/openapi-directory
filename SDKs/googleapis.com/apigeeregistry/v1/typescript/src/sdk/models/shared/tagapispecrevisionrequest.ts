import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagApiSpecRevisionRequest
/** 
 * Request message for TagApiSpecRevision.
**/
export class TagApiSpecRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
