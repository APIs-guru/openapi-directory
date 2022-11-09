import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Order } from "./order";


export class CreateOrderOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Order" })
  order?: Order;
}
