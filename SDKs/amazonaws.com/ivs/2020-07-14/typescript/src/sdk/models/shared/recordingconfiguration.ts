import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { RecordingConfigurationStateEnum } from "./recordingconfigurationstateenum";



// RecordingConfiguration
/** 
 * An object representing a configuration to record a channel stream.
**/
export class RecordingConfiguration extends SpeakeasyBase {
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
