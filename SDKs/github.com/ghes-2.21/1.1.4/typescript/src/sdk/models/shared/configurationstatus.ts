import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigurationStatusProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}


export class ConfigurationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=progress", elemType: ConfigurationStatusProgress })
  progress?: ConfigurationStatusProgress[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
