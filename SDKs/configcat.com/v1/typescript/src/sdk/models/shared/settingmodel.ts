import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SettingTypeEnum } from "./settingtypeenum";
import { TagModel } from "./tagmodel";


export class SettingModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configName" })
  configName?: string;

  @Metadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @Metadata({ data: "json, name=hint" })
  hint?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerUserEmail" })
  ownerUserEmail?: string;

  @Metadata({ data: "json, name=ownerUserFullName" })
  ownerUserFullName?: string;

  @Metadata({ data: "json, name=settingId" })
  settingId?: number;

  @Metadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.TagModel })
  tags?: TagModel[];
}
