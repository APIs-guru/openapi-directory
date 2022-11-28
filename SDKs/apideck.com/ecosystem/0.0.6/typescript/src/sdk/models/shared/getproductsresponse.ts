import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Product })
  data: Product[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
