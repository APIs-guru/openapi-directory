import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
**/
export declare class PatchSource extends SpeakeasyBase {
    configuration: string;
    name: string;
    products: string[];
}
