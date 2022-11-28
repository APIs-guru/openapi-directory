import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { RecordingConfigurationStateEnum } from "./recordingconfigurationstateenum";
/**
 * Summary information about a RecordingConfiguration.
**/
export declare class RecordingConfigurationSummary extends SpeakeasyBase {
    arn: string;
    destinationConfiguration: DestinationConfiguration;
    name?: string;
    state: RecordingConfigurationStateEnum;
    tags?: Map<string, string>;
}
