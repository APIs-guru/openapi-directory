import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentNum" })
  agentNum?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: number;
}
