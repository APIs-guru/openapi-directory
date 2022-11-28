import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";



export class CreateOrderOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Order" })
  order?: Order;
}
