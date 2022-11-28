import { SpeakeasyBase } from "../../../internal/utils";
export declare class GitRefObject extends SpeakeasyBase {
    sha: string;
    type: string;
    url: string;
}
/**
 * Git references within a repository
**/
export declare class GitRef extends SpeakeasyBase {
    nodeId: string;
    object: GitRefObject;
    ref: string;
    url: string;
}
