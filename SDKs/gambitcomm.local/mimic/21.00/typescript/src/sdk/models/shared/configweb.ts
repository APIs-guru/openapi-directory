import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigWeb extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_persistent_connections" })
  isPersistentConnections?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=wsdl" })
  wsdl?: string;
}
