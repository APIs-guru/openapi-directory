import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingTypeEnum } from "./settingtypeenum";


export class SettingDataModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @Metadata({ data: "json, name=creatorFullName" })
  creatorFullName?: string;

  @Metadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @Metadata({ data: "json, name=hint" })
  hint?: string;

  @Metadata({ data: "json, name=isWatching" })
  isWatching?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerEmail" })
  ownerEmail?: string;

  @Metadata({ data: "json, name=ownerFullName" })
  ownerFullName?: string;

  @Metadata({ data: "json, name=settingId" })
  settingId?: number;

  @Metadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;
}
