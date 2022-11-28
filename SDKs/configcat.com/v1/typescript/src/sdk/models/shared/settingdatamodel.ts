import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";



export class SettingDataModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorFullName" })
  creatorFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: string;

  @SpeakeasyMetadata({ data: "json, name=isWatching" })
  isWatching?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerEmail" })
  ownerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerFullName" })
  ownerFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=settingId" })
  settingId?: number;

  @SpeakeasyMetadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;
}
