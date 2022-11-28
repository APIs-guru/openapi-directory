import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Child } from "./child";



export class ListChildrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Children", elemType: Child })
  children?: Child[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
