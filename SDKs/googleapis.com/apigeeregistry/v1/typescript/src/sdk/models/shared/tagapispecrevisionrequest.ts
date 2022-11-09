import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagApiSpecRevisionRequest
/** 
 * Request message for TagApiSpecRevision.
**/
export class TagApiSpecRevisionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
