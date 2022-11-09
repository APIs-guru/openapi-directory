import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigurationStatusProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}


export class ConfigurationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=progress", elemType: shared.ConfigurationStatusProgress })
  progress?: ConfigurationStatusProgress[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
