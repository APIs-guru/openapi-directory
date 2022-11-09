import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscribedWorkteam } from "./subscribedworkteam";


export class DescribeSubscribedWorkteamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubscribedWorkteam" })
  subscribedWorkteam: SubscribedWorkteam;
}
