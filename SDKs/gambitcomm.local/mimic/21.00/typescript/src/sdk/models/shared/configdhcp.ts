import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigDhcp extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_options" })
  addOptions?: string;

  @Metadata({ data: "json, name=classid" })
  classid?: string;

  @Metadata({ data: "json, name=hwaddr" })
  hwaddr?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
