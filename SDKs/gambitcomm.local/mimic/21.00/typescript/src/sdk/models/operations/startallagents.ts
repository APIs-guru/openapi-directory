import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartAllAgentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  startAllAgents200ApplicationJsonObject?: Map<string, number>;
}
