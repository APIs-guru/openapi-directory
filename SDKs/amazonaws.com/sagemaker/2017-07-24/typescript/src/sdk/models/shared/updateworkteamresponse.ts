import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Workteam } from "./workteam";


export class UpdateWorkteamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workteam" })
  workteam: Workteam;
}
