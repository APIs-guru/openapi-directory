import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigCoap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keystore" })
  keystore?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_port" })
  primaryPort?: number;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: string;

  @SpeakeasyMetadata({ data: "json, name=secure_port" })
  securePort?: number;
}
