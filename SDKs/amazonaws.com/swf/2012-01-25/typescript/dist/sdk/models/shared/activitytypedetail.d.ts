import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityTypeConfiguration } from "./activitytypeconfiguration";
import { ActivityTypeInfo } from "./activitytypeinfo";
/**
 * Detailed information about an activity type.
**/
export declare class ActivityTypeDetail extends SpeakeasyBase {
    configuration: ActivityTypeConfiguration;
    typeInfo: ActivityTypeInfo;
}
