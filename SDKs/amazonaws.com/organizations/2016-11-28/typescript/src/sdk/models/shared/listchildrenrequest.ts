import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildTypeEnum } from "./childtypeenum";



export class ListChildrenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChildType" })
  childType: ChildTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentId" })
  parentId: string;
}
