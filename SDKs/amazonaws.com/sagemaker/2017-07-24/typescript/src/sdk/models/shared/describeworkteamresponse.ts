import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workteam } from "./workteam";



export class DescribeWorkteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Workteam" })
  workteam: Workteam;
}
