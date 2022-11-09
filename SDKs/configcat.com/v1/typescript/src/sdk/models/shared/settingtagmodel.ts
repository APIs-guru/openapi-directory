import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SettingTagModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=settingTagId" })
  settingTagId?: number;

  @Metadata({ data: "json, name=tagId" })
  tagId?: number;
}
