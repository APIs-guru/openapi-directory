import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents metadata about a patch.
**/
export declare class Patch extends SpeakeasyBase {
    advisoryIds?: string[];
    arch?: string;
    bugzillaIds?: string[];
    cveIds?: string[];
    classification?: string;
    contentUrl?: string;
    description?: string;
    epoch?: number;
    id?: string;
    kbNumber?: string;
    language?: string;
    msrcNumber?: string;
    msrcSeverity?: string;
    name?: string;
    product?: string;
    productFamily?: string;
    release?: string;
    releaseDate?: Date;
    repository?: string;
    severity?: string;
    title?: string;
    vendor?: string;
    version?: string;
}
