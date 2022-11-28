import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedText } from "./localizedtext";



// StoreCluster
/** 
 * Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
**/
export class StoreCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name", elemType: LocalizedText })
  name?: LocalizedText[];

  @SpeakeasyMetadata({ data: "json, name=orderInPage" })
  orderInPage?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string[];
}
