import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentSubmoduleLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
/**
 * An object describing a symlink
**/
export declare class ContentSubmodule extends SpeakeasyBase {
    links: ContentSubmoduleLinks;
    downloadUrl: string;
    gitUrl: string;
    htmlUrl: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    submoduleGitUrl: string;
    type: string;
    url: string;
}
