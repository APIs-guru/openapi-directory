import { SpeakeasyBase } from "../../../internal/utils";
import { PagesSourceHash } from "./pagessourcehash";
export declare enum PageStatusEnum {
    Built = "built",
    Building = "building",
    Errored = "errored"
}
/**
 * The configuration for GitHub Pages for a repository.
**/
export declare class Page extends SpeakeasyBase {
    cname: string;
    custom404: boolean;
    htmlUrl?: string;
    public: boolean;
    source?: PagesSourceHash;
    status: PageStatusEnum;
    url: string;
}
