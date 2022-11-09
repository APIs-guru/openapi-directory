import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingTypeEnum } from "./settingtypeenum";
export declare class SettingDataModel extends SpeakeasyBase {
    createdAt?: Date;
    creatorEmail?: string;
    creatorFullName?: string;
    expirationWarningAt?: Date;
    hint?: string;
    isWatching?: boolean;
    key?: string;
    name?: string;
    ownerEmail?: string;
    ownerFullName?: string;
    settingId?: number;
    settingType?: SettingTypeEnum;
}
