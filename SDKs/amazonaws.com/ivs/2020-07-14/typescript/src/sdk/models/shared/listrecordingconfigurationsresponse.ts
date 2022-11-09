import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecordingConfigurationSummary } from "./recordingconfigurationsummary";


export class ListRecordingConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=recordingConfigurations", elemType: shared.RecordingConfigurationSummary })
  recordingConfigurations: RecordingConfigurationSummary[];
}
