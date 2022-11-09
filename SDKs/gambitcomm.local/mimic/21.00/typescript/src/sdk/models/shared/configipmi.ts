import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigIpmi extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary_port" })
  primaryPort?: number;

  @Metadata({ data: "json, name=secure_port" })
  securePort?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
