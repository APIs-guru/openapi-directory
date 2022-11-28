import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscribedWorkteam } from "./subscribedworkteam";



export class ListSubscribedWorkteamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscribedWorkteams", elemType: SubscribedWorkteam })
  subscribedWorkteams: SubscribedWorkteam[];
}
