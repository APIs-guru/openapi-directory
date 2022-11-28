import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableClusterOption } from "./orderableclusteroption";



// OrderableClusterOptionsMessage
/** 
 * Contains the output from the <a>DescribeOrderableClusterOptions</a> action. 
**/
export class OrderableClusterOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableClusterOption })
  orderableClusterOptions?: OrderableClusterOption[];
}
