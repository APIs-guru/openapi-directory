import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Target
/** 
 * Information about the object modified by the event.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
