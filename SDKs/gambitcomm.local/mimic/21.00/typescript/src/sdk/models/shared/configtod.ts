import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigTod extends SpeakeasyBase {
  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=retries" })
  retries?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;
}
