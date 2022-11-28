import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigSsh extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
