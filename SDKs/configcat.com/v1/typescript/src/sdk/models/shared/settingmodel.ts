import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";
import { TagModel } from "./tagmodel";



export class SettingModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configName" })
  configName?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserEmail" })
  ownerUserEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserFullName" })
  ownerUserFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=settingId" })
  settingId?: number;

  @SpeakeasyMetadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagModel })
  tags?: TagModel[];
}
