import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigIpmi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_port" })
  primaryPort?: number;

  @SpeakeasyMetadata({ data: "json, name=secure_port" })
  securePort?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
