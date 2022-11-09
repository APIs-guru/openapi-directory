import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_mask" })
  accessMask?: string;

  @Metadata({ data: "json, name=agent_range" })
  agentRange?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}
