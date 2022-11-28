import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationConfiguration } from "./applicationconfiguration";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";
import { Tag } from "./tag";



export class CreateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationConfiguration" })
  applicationConfiguration?: ApplicationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationMode" })
  applicationMode?: ApplicationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions", elemType: CloudWatchLoggingOption })
  cloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  @SpeakeasyMetadata({ data: "json, name=RuntimeEnvironment" })
  runtimeEnvironment: RuntimeEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceExecutionRole" })
  serviceExecutionRole: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
