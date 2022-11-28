import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityType
/** 
 * Represents an activity type.
**/
export class ActivityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
