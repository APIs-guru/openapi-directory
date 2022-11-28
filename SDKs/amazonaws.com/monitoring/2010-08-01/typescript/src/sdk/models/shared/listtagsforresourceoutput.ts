import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class ListTagsForResourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
