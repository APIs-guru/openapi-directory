import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";



export class NavContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: string;

  @SpeakeasyMetadata({ data: "json, name=list" })
  list?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
