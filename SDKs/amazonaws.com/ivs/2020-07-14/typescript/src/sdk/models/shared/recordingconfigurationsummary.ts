import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { RecordingConfigurationStateEnum } from "./recordingconfigurationstateenum";



// RecordingConfigurationSummary
/** 
 * Summary information about a RecordingConfiguration.
**/
export class RecordingConfigurationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfiguration" })
  destinationConfiguration: DestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: RecordingConfigurationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
