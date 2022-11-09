import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChangedStateListResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AgentState })
  agentStates?: shared.AgentState[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
