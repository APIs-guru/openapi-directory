import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigWeb extends SpeakeasyBase {
  @Metadata({ data: "json, name=is_persistent_connections" })
  isPersistentConnections?: number;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=rule" })
  rule?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=wsdl" })
  wsdl?: string;
}
