import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetFamilyEnum } from "./assetfamilyenum";
import { AssetTypeEnum } from "./assettypeenum";



export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssetChangeType" })
  assetChangeType?: string;

  @SpeakeasyMetadata({ data: "json, name=AssetFamily" })
  assetFamily?: AssetFamilyEnum;

  @SpeakeasyMetadata({ data: "json, name=AssetType" })
  assetType?: AssetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: number;

  @SpeakeasyMetadata({ data: "json, name=CreateDateUtc" })
  createDateUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationCount" })
  notificationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=OldestChangeNotificationDateUtc" })
  oldestChangeNotificationDateUtc?: Date;
}
