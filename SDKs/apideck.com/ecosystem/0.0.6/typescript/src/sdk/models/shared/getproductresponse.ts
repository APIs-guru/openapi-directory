import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Product } from "./product";


export class GetProductResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Product;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
