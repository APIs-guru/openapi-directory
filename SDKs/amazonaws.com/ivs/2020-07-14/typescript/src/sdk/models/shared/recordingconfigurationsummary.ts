import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { RecordingConfigurationStateEnum } from "./recordingconfigurationstateenum";


// RecordingConfigurationSummary
/** 
 * Summary information about a RecordingConfiguration.
**/
export class RecordingConfigurationSummary extends SpeakeasyBase {
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
