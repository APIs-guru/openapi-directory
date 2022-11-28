import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";



export class CreateSettingModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=settingType" })
  settingType: SettingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: number[];
}
