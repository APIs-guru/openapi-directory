import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalizedText } from "./localizedtext";


// StoreCluster
/** 
 * Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
**/
export class StoreCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name", elemType: shared.LocalizedText })
  name?: LocalizedText[];

  @Metadata({ data: "json, name=orderInPage" })
  orderInPage?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string[];
}
