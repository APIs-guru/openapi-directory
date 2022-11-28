import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SettingTagModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=settingTagId" })
  settingTagId?: number;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: number;
}
