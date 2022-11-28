import { SpeakeasyBase } from "../../../internal/utils";
import { PagesHttpsCertificate } from "./pageshttpscertificate";
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
    httpsCertificate?: PagesHttpsCertificate;
    httpsEnforced?: boolean;
    public: boolean;
    source?: PagesSourceHash;
    status: PageStatusEnum;
    url: string;
}
