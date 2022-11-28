import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a software package.
**/
export declare class SoftwarePackage extends SpeakeasyBase {
    architecture?: string;
    epoch?: string;
    filePath?: string;
    name?: string;
    packageManager?: string;
    release?: string;
    version?: string;
}
