import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AgentMetadata
/** 
 * AgentMetadata never changes for a single instance of VM agent.
**/
export class AgentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=osRelease" })
  osRelease?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
