import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Robot } from "./robot";



export class ListRobotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=robots", elemType: Robot })
  robots?: Robot[];
}
