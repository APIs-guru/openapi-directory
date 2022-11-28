import { SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
import { Tag } from "./tag";
export declare class CreateStudioLifecycleConfigRequest extends SpeakeasyBase {
    studioLifecycleConfigAppType: StudioLifecycleConfigAppTypeEnum;
    studioLifecycleConfigContent: string;
    studioLifecycleConfigName: string;
    tags?: Tag[];
}
