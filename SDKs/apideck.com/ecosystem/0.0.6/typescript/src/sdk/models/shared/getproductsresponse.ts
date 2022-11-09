import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Product } from "./product";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Product })
  data: Product[];

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
