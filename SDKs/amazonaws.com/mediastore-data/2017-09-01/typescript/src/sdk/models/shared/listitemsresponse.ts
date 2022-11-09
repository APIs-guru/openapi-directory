import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Item } from "./item";


export class ListItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Item })
  items?: Item[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
