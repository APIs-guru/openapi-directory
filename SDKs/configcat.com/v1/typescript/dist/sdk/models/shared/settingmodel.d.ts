import { SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";
import { TagModel } from "./tagmodel";
export declare class SettingModel extends SpeakeasyBase {
    configId?: string;
    configName?: string;
    expirationWarningAt?: Date;
    hint?: string;
    key?: string;
    name?: string;
    ownerUserEmail?: string;
    ownerUserFullName?: string;
    settingId?: number;
    settingType?: SettingTypeEnum;
    tags?: TagModel[];
}
