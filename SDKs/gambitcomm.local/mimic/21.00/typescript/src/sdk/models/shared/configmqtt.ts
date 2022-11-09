import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigMqtt extends SpeakeasyBase {
  @Metadata({ data: "json, name=broker" })
  broker?: string;

  @Metadata({ data: "json, name=clientid" })
  clientid?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=is_tls" })
  isTls?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=tls_conf_filename" })
  tlsConfFilename?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
