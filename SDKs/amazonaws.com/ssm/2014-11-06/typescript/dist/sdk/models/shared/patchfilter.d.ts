import { SpeakeasyBase } from "../../../internal/utils";
import { PatchFilterKeyEnum } from "./patchfilterkeyenum";
/**
 * <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for <code>WINDOWS</code> are <code>PATCH_SET</code>, <code>PRODUCT</code>, <code>PRODUCT_FAMILY</code>, <code>CLASSIFICATION</code>, and <code>MSRC_SEVERITY</code>.</p> <p>The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is <code>PRODUCT</code> and the filter values are <code>["Office 2013", "Office 2016"]</code>, then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p>
**/
export declare class PatchFilter extends SpeakeasyBase {
    key: PatchFilterKeyEnum;
    values: string[];
}
