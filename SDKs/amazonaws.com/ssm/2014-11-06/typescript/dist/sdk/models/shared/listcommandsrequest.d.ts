import { SpeakeasyBase } from "../../../internal/utils";
import { CommandFilter } from "./commandfilter";
export declare class ListCommandsRequest extends SpeakeasyBase {
    commandId?: string;
    filters?: CommandFilter[];
    instanceId?: string;
    maxResults?: number;
    nextToken?: string;
}
