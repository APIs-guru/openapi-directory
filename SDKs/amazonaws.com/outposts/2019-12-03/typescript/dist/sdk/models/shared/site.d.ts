import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a site.
**/
export declare class Site extends SpeakeasyBase {
    accountId?: string;
    description?: string;
    name?: string;
    siteArn?: string;
    siteId?: string;
    tags?: Map<string, string>;
}
