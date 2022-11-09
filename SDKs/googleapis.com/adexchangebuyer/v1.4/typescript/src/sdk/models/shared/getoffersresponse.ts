import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Product } from "./product";


export class GetOffersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=products", elemType: shared.Product })
  products?: Product[];
}
