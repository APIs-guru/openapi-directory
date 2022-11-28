import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigProxy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TCP_NODELAY" })
  tcpNodelay?: number;

  @SpeakeasyMetadata({ data: "json, name=client_to_server" })
  clientToServer?: string;

  @SpeakeasyMetadata({ data: "json, name=disconnect_delay" })
  disconnectDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=max_connects" })
  maxConnects?: number;

  @SpeakeasyMetadata({ data: "json, name=portno" })
  portno?: number;

  @SpeakeasyMetadata({ data: "json, name=pre_connect" })
  preConnect?: string;

  @SpeakeasyMetadata({ data: "json, name=server_to_client" })
  serverToClient?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=transport" })
  transport?: string;
}
