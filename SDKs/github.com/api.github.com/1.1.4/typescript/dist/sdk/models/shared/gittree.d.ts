import { SpeakeasyBase } from "../../../internal/utils";
export declare class GitTreeTree extends SpeakeasyBase {
    mode?: string;
    path?: string;
    sha?: string;
    size?: number;
    type?: string;
    url?: string;
}
/**
 * The hierarchy between files in a Git repository.
**/
export declare class GitTree extends SpeakeasyBase {
    sha: string;
    tree: GitTreeTree[];
    truncated: boolean;
    url: string;
}
