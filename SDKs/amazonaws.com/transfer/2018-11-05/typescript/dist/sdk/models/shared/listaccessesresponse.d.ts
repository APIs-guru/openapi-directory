import { SpeakeasyBase } from "../../../internal/utils";
import { ListedAccess } from "./listedaccess";
export declare class ListAccessesResponse extends SpeakeasyBase {
    accesses: ListedAccess[];
    nextToken?: string;
    serverId: string;
}
