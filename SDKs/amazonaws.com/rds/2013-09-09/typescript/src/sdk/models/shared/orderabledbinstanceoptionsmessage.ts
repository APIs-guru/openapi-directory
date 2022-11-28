import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOption } from "./orderabledbinstanceoption";



export class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableDbInstanceOption })
  orderableDbInstanceOptions?: OrderableDbInstanceOption[];
}
