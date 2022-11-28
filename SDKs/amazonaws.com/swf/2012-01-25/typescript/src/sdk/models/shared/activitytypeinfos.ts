import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityTypeInfo } from "./activitytypeinfo";



// ActivityTypeInfos
/** 
 * Contains a paginated list of activity type information structures.
**/
export class ActivityTypeInfos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=typeInfos", elemType: ActivityTypeInfo })
  typeInfos: ActivityTypeInfo[];
}
