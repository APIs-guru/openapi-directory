import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";


// ApplicationSummary
/** 
 * Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
**/
export class ApplicationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn: string;

  @Metadata({ data: "json, name=ApplicationMode" })
  applicationMode?: ApplicationModeEnum;

  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @Metadata({ data: "json, name=RuntimeEnvironment" })
  runtimeEnvironment: RuntimeEnvironmentEnum;
}
