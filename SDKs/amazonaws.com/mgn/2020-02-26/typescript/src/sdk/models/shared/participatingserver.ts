import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchStatusEnum } from "./launchstatusenum";


// ParticipatingServer
/** 
 * Server participating in Job.
**/
export class ParticipatingServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchStatus" })
  launchStatus?: LaunchStatusEnum;

  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;
}
