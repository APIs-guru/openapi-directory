import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";



// UserActivitySession
/** 
 * This represents a user session performed on a specific device at a certain time over a period of time.
**/
export class UserActivitySession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: Activity })
  activities?: Activity[];

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceCategory" })
  deviceCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionDate" })
  sessionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
