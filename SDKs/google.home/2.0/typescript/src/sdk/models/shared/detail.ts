import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IconList } from "./iconlist";
import { Locale } from "./locale";
import { Timezone } from "./timezone";


export class Detail extends SpeakeasyBase {
  @Metadata({ data: "json, name=icon_list", elemType: shared.IconList })
  iconList: IconList[];

  @Metadata({ data: "json, name=locale" })
  locale: Locale;

  @Metadata({ data: "json, name=timezone" })
  timezone: Timezone;
}
