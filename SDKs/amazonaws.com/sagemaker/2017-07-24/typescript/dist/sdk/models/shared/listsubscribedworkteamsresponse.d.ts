import { SpeakeasyBase } from "../../../internal/utils";
import { SubscribedWorkteam } from "./subscribedworkteam";
export declare class ListSubscribedWorkteamsResponse extends SpeakeasyBase {
    nextToken?: string;
    subscribedWorkteams: SubscribedWorkteam[];
}
