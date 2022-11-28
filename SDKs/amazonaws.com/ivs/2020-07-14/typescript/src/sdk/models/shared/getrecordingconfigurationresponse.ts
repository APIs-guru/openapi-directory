import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordingConfiguration } from "./recordingconfiguration";



export class GetRecordingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordingConfiguration" })
  recordingConfiguration?: RecordingConfiguration;
}
