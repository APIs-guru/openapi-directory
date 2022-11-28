import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
export declare class GistSimpleFiles extends SpeakeasyBase {
    content?: string;
    filename?: string;
    language?: string;
    rawUrl?: string;
    size?: number;
    truncated?: boolean;
    type?: string;
}
/**
 * Gist Simple
**/
export declare class GistSimple extends SpeakeasyBase {
    comments?: number;
    commentsUrl?: string;
    commitsUrl?: string;
    createdAt?: string;
    description?: string;
    files?: Map<string, GistSimpleFiles>;
    forksUrl?: string;
    gitPullUrl?: string;
    gitPushUrl?: string;
    htmlUrl?: string;
    id?: string;
    nodeId?: string;
    owner?: SimpleUser;
    public?: boolean;
    truncated?: boolean;
    updatedAt?: string;
    url?: string;
    user?: string;
}
