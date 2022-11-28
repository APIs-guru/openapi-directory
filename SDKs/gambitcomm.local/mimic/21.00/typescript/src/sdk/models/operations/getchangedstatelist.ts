import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChangedStateListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AgentState })
  agentStates?: shared.AgentState[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
