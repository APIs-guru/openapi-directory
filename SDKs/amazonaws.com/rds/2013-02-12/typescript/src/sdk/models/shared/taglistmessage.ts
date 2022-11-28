import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class TagListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Tag })
  tagList?: Tag[];
}
