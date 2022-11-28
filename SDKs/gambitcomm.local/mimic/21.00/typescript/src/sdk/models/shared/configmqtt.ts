import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigMqtt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=broker" })
  broker?: string;

  @SpeakeasyMetadata({ data: "json, name=clientid" })
  clientid?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=is_tls" })
  isTls?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=tls_conf_filename" })
  tlsConfFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
