import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Target
/** 
 * Information about the object modified by the event.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
