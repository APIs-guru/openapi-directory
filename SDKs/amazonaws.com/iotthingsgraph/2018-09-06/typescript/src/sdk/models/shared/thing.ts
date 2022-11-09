import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Thing
/** 
 * An AWS IoT thing.
**/
export class Thing extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}
