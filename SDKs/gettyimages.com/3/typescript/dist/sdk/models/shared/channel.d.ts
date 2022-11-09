import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetFamilyEnum } from "./assetfamilyenum";
import { AssetTypeEnum } from "./assettypeenum";
export declare class Channel extends SpeakeasyBase {
    assetChangeType?: string;
    assetFamily?: AssetFamilyEnum;
    assetType?: AssetTypeEnum;
    channelId?: number;
    createDateUtc?: Date;
    metadata?: string;
    notificationCount?: number;
    oldestChangeNotificationDateUtc?: Date;
}
