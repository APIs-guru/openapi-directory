import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Root } from "./root";



export class ListRootsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Roots", elemType: Root })
  roots?: Root[];
}
