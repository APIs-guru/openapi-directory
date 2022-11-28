import { SpeakeasyBase } from "../../../internal/utils";
import { CommandFilter } from "./commandfilter";
export declare class ListCommandInvocationsRequest extends SpeakeasyBase {
    commandId?: string;
    details?: boolean;
    filters?: CommandFilter[];
    instanceId?: string;
    maxResults?: number;
    nextToken?: string;
}
