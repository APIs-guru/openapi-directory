import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityTypeConfiguration } from "./activitytypeconfiguration";
import { ActivityTypeInfo } from "./activitytypeinfo";



// ActivityTypeDetail
/** 
 * Detailed information about an activity type.
**/
export class ActivityTypeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: ActivityTypeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=typeInfo" })
  typeInfo: ActivityTypeInfo;
}
