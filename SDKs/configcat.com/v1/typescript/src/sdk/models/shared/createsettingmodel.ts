import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingTypeEnum } from "./settingtypeenum";


export class CreateSettingModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=hint" })
  hint?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=settingType" })
  settingType: SettingTypeEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: number[];
}
