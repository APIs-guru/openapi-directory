import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildTypeEnum } from "./childtypeenum";


export class ListChildrenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChildType" })
  childType: ChildTypeEnum;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParentId" })
  parentId: string;
}
