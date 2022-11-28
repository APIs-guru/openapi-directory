import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClients200ApplicationJsonObject?: Map<string, number>;
}
