import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagCommit extends SpeakeasyBase {
    sha: string;
    url: string;
}
/**
 * Tag
**/
export declare class Tag extends SpeakeasyBase {
    commit: TagCommit;
    name: string;
    nodeId: string;
    tarballUrl: string;
    zipballUrl: string;
}
