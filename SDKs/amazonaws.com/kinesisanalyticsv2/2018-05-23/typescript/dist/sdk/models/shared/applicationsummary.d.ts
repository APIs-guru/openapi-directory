import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";
/**
 * Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
**/
export declare class ApplicationSummary extends SpeakeasyBase {
    applicationArn: string;
    applicationMode?: ApplicationModeEnum;
    applicationName: string;
    applicationStatus: ApplicationStatusEnum;
    applicationVersionId: number;
    runtimeEnvironment: RuntimeEnvironmentEnum;
}
