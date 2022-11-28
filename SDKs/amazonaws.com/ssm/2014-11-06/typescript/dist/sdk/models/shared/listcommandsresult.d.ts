import { SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";
export declare class ListCommandsResult extends SpeakeasyBase {
    commands?: Command[];
    nextToken?: string;
}
