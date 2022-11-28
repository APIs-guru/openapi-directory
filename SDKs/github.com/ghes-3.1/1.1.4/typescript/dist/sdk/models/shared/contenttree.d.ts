import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentTreeLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
export declare class ContentTreeEntriesLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
export declare class ContentTreeEntries extends SpeakeasyBase {
    links: ContentTreeEntriesLinks;
    content?: string;
    downloadUrl: string;
    gitUrl: string;
    htmlUrl: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: string;
    url: string;
}
/**
 * Content Tree
**/
export declare class ContentTree extends SpeakeasyBase {
    links: ContentTreeLinks;
    downloadUrl: string;
    entries?: ContentTreeEntries[];
    gitUrl: string;
    htmlUrl: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: string;
    url: string;
}
