import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityTypeConfiguration } from "./activitytypeconfiguration";
import { ActivityTypeInfo } from "./activitytypeinfo";


// ActivityTypeDetail
/** 
 * Detailed information about an activity type.
**/
export class ActivityTypeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration: ActivityTypeConfiguration;

  @Metadata({ data: "json, name=typeInfo" })
  typeInfo: ActivityTypeInfo;
}
