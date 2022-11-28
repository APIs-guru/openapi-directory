import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigDhcp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_options" })
  addOptions?: string;

  @SpeakeasyMetadata({ data: "json, name=classid" })
  classid?: string;

  @SpeakeasyMetadata({ data: "json, name=hwaddr" })
  hwaddr?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
