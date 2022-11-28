import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
/**
 * The status of a commit.
**/
export declare class Status extends SpeakeasyBase {
    avatarUrl: string;
    context: string;
    createdAt: string;
    creator: SimpleUser;
    description: string;
    id: number;
    nodeId: string;
    state: string;
    targetUrl: string;
    updatedAt: string;
    url: string;
}
