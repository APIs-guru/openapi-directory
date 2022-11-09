import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetFamilyEnum } from "./assetfamilyenum";
import { AssetTypeEnum } from "./assettypeenum";


export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssetChangeType" })
  assetChangeType?: string;

  @Metadata({ data: "json, name=AssetFamily" })
  assetFamily?: AssetFamilyEnum;

  @Metadata({ data: "json, name=AssetType" })
  assetType?: AssetTypeEnum;

  @Metadata({ data: "json, name=ChannelId" })
  channelId?: number;

  @Metadata({ data: "json, name=CreateDateUtc" })
  createDateUtc?: Date;

  @Metadata({ data: "json, name=Metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=NotificationCount" })
  notificationCount?: number;

  @Metadata({ data: "json, name=OldestChangeNotificationDateUtc" })
  oldestChangeNotificationDateUtc?: Date;
}
