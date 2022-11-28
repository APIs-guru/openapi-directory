import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationConfigurationUpdate } from "./applicationconfigurationupdate";
import { CloudWatchLoggingOptionUpdate } from "./cloudwatchloggingoptionupdate";
import { RunConfigurationUpdate } from "./runconfigurationupdate";
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    applicationConfigurationUpdate?: ApplicationConfigurationUpdate;
    applicationName: string;
    cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];
    conditionalToken?: string;
    currentApplicationVersionId?: number;
    runConfigurationUpdate?: RunConfigurationUpdate;
    serviceExecutionRoleUpdate?: string;
}
