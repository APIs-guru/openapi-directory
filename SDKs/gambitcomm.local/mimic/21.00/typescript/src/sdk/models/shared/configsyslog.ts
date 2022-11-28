import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigSyslog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=localport" })
  localport?: number;

  @SpeakeasyMetadata({ data: "json, name=separator" })
  separator?: string;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=serverport" })
  serverport?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
