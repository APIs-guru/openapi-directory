import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigProxy extends SpeakeasyBase {
  @Metadata({ data: "json, name=TCP_NODELAY" })
  tcpNodelay?: number;

  @Metadata({ data: "json, name=client_to_server" })
  clientToServer?: string;

  @Metadata({ data: "json, name=disconnect_delay" })
  disconnectDelay?: number;

  @Metadata({ data: "json, name=max_connects" })
  maxConnects?: number;

  @Metadata({ data: "json, name=portno" })
  portno?: number;

  @Metadata({ data: "json, name=pre_connect" })
  preConnect?: string;

  @Metadata({ data: "json, name=server_to_client" })
  serverToClient?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=transport" })
  transport?: string;
}
