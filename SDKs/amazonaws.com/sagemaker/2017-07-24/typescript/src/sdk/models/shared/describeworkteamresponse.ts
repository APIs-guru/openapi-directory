import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Workteam } from "./workteam";


export class DescribeWorkteamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workteam" })
  workteam: Workteam;
}
