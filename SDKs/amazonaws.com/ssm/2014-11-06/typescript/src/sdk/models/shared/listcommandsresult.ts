import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";



export class ListCommandsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Commands", elemType: Command })
  commands?: Command[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
