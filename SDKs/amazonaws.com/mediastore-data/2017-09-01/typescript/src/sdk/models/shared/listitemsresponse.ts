import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";



export class ListItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Item })
  items?: Item[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
