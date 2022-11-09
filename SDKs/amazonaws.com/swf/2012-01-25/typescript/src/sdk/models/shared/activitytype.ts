import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityType
/** 
 * Represents an activity type.
**/
export class ActivityType extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
