import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Publisher
/** 
 * Contains details of the listing publisher.
**/
export class Publisher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContact" })
  primaryContact?: string;
}
