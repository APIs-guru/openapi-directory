import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { RegistrationStatusEnum } from "./registrationstatusenum";
/**
 * Detailed information about an activity type.
**/
export declare class ActivityTypeInfo extends SpeakeasyBase {
    activityType: ActivityType;
    creationDate: Date;
    deprecationDate?: Date;
    description?: string;
    status: RegistrationStatusEnum;
}
