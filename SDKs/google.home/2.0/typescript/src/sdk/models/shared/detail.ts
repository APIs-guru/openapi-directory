import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IconList } from "./iconlist";
import { Locale } from "./locale";
import { Timezone } from "./timezone";



export class Detail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=icon_list", elemType: IconList })
  iconList: IconList[];

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale: Locale;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone: Timezone;
}
