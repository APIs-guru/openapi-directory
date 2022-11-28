import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";



export class GetOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products", elemType: Product })
  products?: Product[];
}
