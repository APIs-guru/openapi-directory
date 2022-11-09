import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemList } from "./itemlist";


export class NavContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageType" })
  imageType?: string;

  @Metadata({ data: "json, name=list" })
  list?: ItemList;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
