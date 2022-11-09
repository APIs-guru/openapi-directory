import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceTag } from "./resourcetag";


export class ListTagsForResourceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags", elemType: shared.ResourceTag })
  tags?: ResourceTag[];
}
