import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingConfiguration } from "./recordingconfiguration";



export class CreateRecordingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordingConfiguration" })
  recordingConfiguration?: RecordingConfiguration;
}
