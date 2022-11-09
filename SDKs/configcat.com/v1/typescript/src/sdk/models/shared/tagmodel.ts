import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductModel } from "./productmodel";


export class TagModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product" })
  product?: ProductModel;

  @Metadata({ data: "json, name=tagId" })
  tagId?: number;
}
