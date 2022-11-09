import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getClients200ApplicationJsonObject?: Map<string, number>;
}
