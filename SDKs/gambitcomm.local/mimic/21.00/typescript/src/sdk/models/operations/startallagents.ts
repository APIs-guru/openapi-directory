import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAllAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  startAllAgents200ApplicationJsonObject?: Map<string, number>;
}
