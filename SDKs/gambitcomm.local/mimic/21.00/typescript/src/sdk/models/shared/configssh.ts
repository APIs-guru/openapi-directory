import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigSsh extends SpeakeasyBase {
  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
