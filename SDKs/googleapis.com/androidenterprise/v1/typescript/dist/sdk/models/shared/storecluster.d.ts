import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedText } from "./localizedtext";
/**
 * Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
**/
export declare class StoreCluster extends SpeakeasyBase {
    id?: string;
    name?: LocalizedText[];
    orderInPage?: string;
    productId?: string[];
}
