import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActivityTypeInfo } from "./activitytypeinfo";


// ActivityTypeInfos
/** 
 * Contains a paginated list of activity type information structures.
**/
export class ActivityTypeInfos extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=typeInfos", elemType: shared.ActivityTypeInfo })
  typeInfos: ActivityTypeInfo[];
}
