import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductViewDetail } from "./productviewdetail";
import { Tag } from "./tag";


export class UpdateProductOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductViewDetail" })
  productViewDetail?: ProductViewDetail;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
