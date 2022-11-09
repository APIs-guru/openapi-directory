import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activity } from "./activity";


// UserActivitySession
/** 
 * This represents a user session performed on a specific device at a certain time over a period of time.
**/
export class UserActivitySession extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.Activity })
  activities?: Activity[];

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: string;

  @Metadata({ data: "json, name=deviceCategory" })
  deviceCategory?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: string;

  @Metadata({ data: "json, name=sessionDate" })
  sessionDate?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
