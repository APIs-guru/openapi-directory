import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { RecordingConfigurationStateEnum } from "./recordingconfigurationstateenum";
/**
 * An object representing a configuration to record a channel stream.
**/
export declare class RecordingConfiguration extends SpeakeasyBase {
    arn: string;
    destinationConfiguration: DestinationConfiguration;
    name?: string;
    state: RecordingConfigurationStateEnum;
    tags?: Map<string, string>;
}
