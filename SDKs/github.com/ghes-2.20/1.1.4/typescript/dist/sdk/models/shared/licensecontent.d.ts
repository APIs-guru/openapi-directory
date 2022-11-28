import { SpeakeasyBase } from "../../../internal/utils";
export declare class LicenseContentLinks extends SpeakeasyBase {
    git: string;
    html: string;
    self: string;
}
export declare class LicenseContentLicenseSimple extends SpeakeasyBase {
    htmlUrl?: string;
    key: string;
    name: string;
    nodeId: string;
    spdxId: string;
    url: string;
}
/**
 * License Content
**/
export declare class LicenseContent extends SpeakeasyBase {
    links: LicenseContentLinks;
    content: string;
    downloadUrl: string;
    encoding: string;
    gitUrl: string;
    htmlUrl: string;
    license: LicenseContentLicenseSimple;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: string;
    url: string;
}
