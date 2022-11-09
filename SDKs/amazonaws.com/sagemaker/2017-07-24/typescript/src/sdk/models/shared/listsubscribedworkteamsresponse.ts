import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscribedWorkteam } from "./subscribedworkteam";


export class ListSubscribedWorkteamsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SubscribedWorkteams", elemType: shared.SubscribedWorkteam })
  subscribedWorkteams: SubscribedWorkteam[];
}
