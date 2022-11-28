import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";



export class TagModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductModel;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: number;
}
