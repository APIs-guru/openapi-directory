import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewDetail } from "./productviewdetail";
import { Tag } from "./tag";



export class UpdateProductOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductViewDetail" })
  productViewDetail?: ProductViewDetail;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
