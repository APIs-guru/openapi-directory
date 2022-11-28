import { SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
export declare class GitTagObject extends SpeakeasyBase {
    sha: string;
    type: string;
    url: string;
}
export declare class GitTagTagger extends SpeakeasyBase {
    date: string;
    email: string;
    name: string;
}
/**
 * Metadata for a Git tag
**/
export declare class GitTag extends SpeakeasyBase {
    message: string;
    nodeId: string;
    object: GitTagObject;
    sha: string;
    tag: string;
    tagger: GitTagTagger;
    url: string;
    verification?: Verification;
}
