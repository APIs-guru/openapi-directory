import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscribedWorkteam } from "./subscribedworkteam";



export class DescribeSubscribedWorkteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubscribedWorkteam" })
  subscribedWorkteam: SubscribedWorkteam;
}
