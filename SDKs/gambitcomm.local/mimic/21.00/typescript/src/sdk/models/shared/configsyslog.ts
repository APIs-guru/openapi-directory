import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigSyslog extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=localport" })
  localport?: number;

  @Metadata({ data: "json, name=separator" })
  separator?: string;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=serverport" })
  serverport?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
