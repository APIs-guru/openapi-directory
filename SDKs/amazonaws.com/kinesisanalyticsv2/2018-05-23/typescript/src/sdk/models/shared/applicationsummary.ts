import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";



// ApplicationSummary
/** 
 * Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
**/
export class ApplicationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationMode" })
  applicationMode?: ApplicationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=RuntimeEnvironment" })
  runtimeEnvironment: RuntimeEnvironmentEnum;
}
