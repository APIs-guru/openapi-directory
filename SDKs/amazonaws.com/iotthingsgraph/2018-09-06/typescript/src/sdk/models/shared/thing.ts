import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Thing
/** 
 * An AWS IoT thing.
**/
export class Thing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}
