import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_mask" })
  accessMask?: string;

  @SpeakeasyMetadata({ data: "json, name=agent_range" })
  agentRange?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
