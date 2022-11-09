import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationConfiguration } from "./applicationconfiguration";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";
import { Tag } from "./tag";


export class CreateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationConfiguration" })
  applicationConfiguration?: ApplicationConfiguration;

  @Metadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @Metadata({ data: "json, name=ApplicationMode" })
  applicationMode?: ApplicationModeEnum;

  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions", elemType: shared.CloudWatchLoggingOption })
  cloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  @Metadata({ data: "json, name=RuntimeEnvironment" })
  runtimeEnvironment: RuntimeEnvironmentEnum;

  @Metadata({ data: "json, name=ServiceExecutionRole" })
  serviceExecutionRole: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
