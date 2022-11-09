import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=config_file" })
  configFile?: string;

  @Metadata({ data: "json, name=issues" })
  issues?: string[];

  @Metadata({ data: "json, name=service_name" })
  serviceName?: string;

  @Metadata({ data: "json, name=suggestions" })
  suggestions?: string[];
}
