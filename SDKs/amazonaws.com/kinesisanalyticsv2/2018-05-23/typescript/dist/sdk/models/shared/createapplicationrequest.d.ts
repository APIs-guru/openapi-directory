import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationConfiguration } from "./applicationconfiguration";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";
import { Tag } from "./tag";
export declare class CreateApplicationRequest extends SpeakeasyBase {
    applicationConfiguration?: ApplicationConfiguration;
    applicationDescription?: string;
    applicationMode?: ApplicationModeEnum;
    applicationName: string;
    cloudWatchLoggingOptions?: CloudWatchLoggingOption[];
    runtimeEnvironment: RuntimeEnvironmentEnum;
    serviceExecutionRole: string;
    tags?: Tag[];
}
