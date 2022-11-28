import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Outpost } from "./outpost";



export class ListOutpostsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Outposts", elemType: Outpost })
  outposts?: Outpost[];
}
