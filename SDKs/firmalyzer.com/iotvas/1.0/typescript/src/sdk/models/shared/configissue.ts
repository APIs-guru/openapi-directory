import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config_file" })
  configFile?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: string[];

  @SpeakeasyMetadata({ data: "json, name=service_name" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestions" })
  suggestions?: string[];
}
