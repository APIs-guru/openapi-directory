import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";



export class ListTagsForResourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ResourceTag })
  tags?: ResourceTag[];
}
