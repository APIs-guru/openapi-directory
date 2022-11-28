import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchStatusEnum } from "./launchstatusenum";



// ParticipatingServer
/** 
 * Server participating in Job.
**/
export class ParticipatingServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchStatus" })
  launchStatus?: LaunchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;
}
