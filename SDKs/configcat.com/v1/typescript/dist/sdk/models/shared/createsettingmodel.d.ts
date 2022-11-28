import { SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";
export declare class CreateSettingModel extends SpeakeasyBase {
    hint?: string;
    key: string;
    name: string;
    settingType: SettingTypeEnum;
    tags?: number[];
}
