import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { RecordingConfigurationStateEnum } from "./recordingconfigurationstateenum";


// RecordingConfiguration
/** 
 * An object representing a configuration to record a channel stream.
**/
export class RecordingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=destinationConfiguration" })
  destinationConfiguration: DestinationConfiguration;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state: RecordingConfigurationStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
