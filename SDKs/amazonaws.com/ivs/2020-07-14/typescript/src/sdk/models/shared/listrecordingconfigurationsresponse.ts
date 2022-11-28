import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingConfigurationSummary } from "./recordingconfigurationsummary";



export class ListRecordingConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingConfigurations", elemType: RecordingConfigurationSummary })
  recordingConfigurations: RecordingConfigurationSummary[];
}
