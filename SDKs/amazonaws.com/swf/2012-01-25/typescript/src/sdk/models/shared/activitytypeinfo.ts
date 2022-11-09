import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityType } from "./activitytype";
import { RegistrationStatusEnum } from "./registrationstatusenum";


// ActivityTypeInfo
/** 
 * Detailed information about an activity type.
**/
export class ActivityTypeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=deprecationDate" })
  deprecationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=status" })
  status: RegistrationStatusEnum;
}
