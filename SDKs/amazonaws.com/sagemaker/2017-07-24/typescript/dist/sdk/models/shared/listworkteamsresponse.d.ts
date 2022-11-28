import { SpeakeasyBase } from "../../../internal/utils";
import { Workteam } from "./workteam";
export declare class ListWorkteamsResponse extends SpeakeasyBase {
    nextToken?: string;
    workteams: Workteam[];
}
