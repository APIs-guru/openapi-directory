import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordingConfiguration } from "./recordingconfiguration";


export class GetRecordingConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=recordingConfiguration" })
  recordingConfiguration?: RecordingConfiguration;
}
