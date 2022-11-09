import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentState extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentNum" })
  agentNum?: number;

  @Metadata({ data: "json, name=state" })
  state?: number;
}
