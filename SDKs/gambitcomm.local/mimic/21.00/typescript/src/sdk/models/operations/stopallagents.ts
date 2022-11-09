import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopAllAgentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopAllAgents200ApplicationJsonObject?: Map<string, number>;
}
