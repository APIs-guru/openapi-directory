import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductModel } from "./productmodel";


export class ConfigModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product" })
  product?: ProductModel;
}
