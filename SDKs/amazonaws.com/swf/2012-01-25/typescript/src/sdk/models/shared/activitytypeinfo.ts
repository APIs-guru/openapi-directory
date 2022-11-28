import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { RegistrationStatusEnum } from "./registrationstatusenum";



// ActivityTypeInfo
/** 
 * Detailed information about an activity type.
**/
export class ActivityTypeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=deprecationDate" })
  deprecationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RegistrationStatusEnum;
}
