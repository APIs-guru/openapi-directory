import { SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
export declare class DescribeStudioLifecycleConfigResponse extends SpeakeasyBase {
    creationTime?: Date;
    lastModifiedTime?: Date;
    studioLifecycleConfigAppType?: StudioLifecycleConfigAppTypeEnum;
    studioLifecycleConfigArn?: string;
    studioLifecycleConfigContent?: string;
    studioLifecycleConfigName?: string;
}
