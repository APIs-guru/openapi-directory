import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityTypeInfo } from "./activitytypeinfo";
/**
 * Contains a paginated list of activity type information structures.
**/
export declare class ActivityTypeInfos extends SpeakeasyBase {
    nextPageToken?: string;
    typeInfos: ActivityTypeInfo[];
}
