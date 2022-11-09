import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigCoap extends SpeakeasyBase {
  @Metadata({ data: "json, name=keystore" })
  keystore?: string;

  @Metadata({ data: "json, name=primary_port" })
  primaryPort?: number;

  @Metadata({ data: "json, name=rule" })
  rule?: string;

  @Metadata({ data: "json, name=secure_port" })
  securePort?: number;
}
