import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigTftp extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache" })
  cache?: number;

  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=dstfile" })
  dstfile?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=retries" })
  retries?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=srcfile" })
  srcfile?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=trace" })
  trace?: string;
}
