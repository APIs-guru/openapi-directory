import { SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
/**
 * Details of the Studio Lifecycle Configuration.
**/
export declare class StudioLifecycleConfigDetails extends SpeakeasyBase {
    creationTime?: Date;
    lastModifiedTime?: Date;
    studioLifecycleConfigAppType?: StudioLifecycleConfigAppTypeEnum;
    studioLifecycleConfigArn?: string;
    studioLifecycleConfigName?: string;
}
