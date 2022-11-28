import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigTftp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache" })
  cache?: number;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=dstfile" })
  dstfile?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=srcfile" })
  srcfile?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=trace" })
  trace?: string;
}
